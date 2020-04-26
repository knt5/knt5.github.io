const StyleLintPlugin = require(`stylelint-webpack-plugin`);

module.exports = {
	assetsDir: `assets`,
	configureWebpack: {
		devServer: {
			overlay: {
				warnings: true,
				errors: true,
			},
		},
		plugins: [
			new StyleLintPlugin({
				configFile: `.stylelintrc.js`,
				files: `src/**/*.{vue,scss}`,
				failOnError: false,
				emitErrors: true,
				fix: true,
			}),
		]
	},
};
