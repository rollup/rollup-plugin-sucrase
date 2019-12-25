# Moved

This package has moved and is now available at [@rollup/plugin-sucrase](https://github.com/rollup/plugins). Please update your dependencies. This repository is no longer maintained.


# rollup-plugin-sucrase

Use [Sucrase](https://github.com/alangpierce/sucrase) with Rollup.

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
