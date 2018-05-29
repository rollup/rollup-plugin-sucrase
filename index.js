const { transform } = require('sucrase');
const { createFilter } = require('rollup-pluginutils');

module.exports = function sucrase(opts = {}) {
	const filter = createFilter(opts.include, opts.exclude);

	return {
		name: 'sucrase',

		transform(code, id) {
			return transform(code, {
				transforms: opts.transforms
			});
		}
	};
};