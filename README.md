# rollup-plugin-sucrase

Use [Sucrase](https://github.com/alangpierce/sucrase) with Rollup.

## Archived (Migration to Mono-Repo In-Process)

This repository has been archived and is in the process of being migrated to a new monorepo. Please bear with us as we make this transition. More information to follow.

## Installation

```bash
yarn add -D rollup-plugin-sucrase
```


### Usage

An example of compiling TypeScript (the node-resolve plugin is added to automatically add file extensions, since TypeScript expects not to find them):

```js
// rollup.config.js
import sucrase from 'rollup-plugin-sucrase';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
       extensions: ['.js', '.ts' ]
    }),
     sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript']
    })
  ]
}
```


## License

[LIL](LICENSE).
