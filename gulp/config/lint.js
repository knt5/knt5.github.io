module.exports = {
	targets: {
		scss: [
			'src/scss/**/*.scss',
		],
		js: [
			'gulp/task/**/*.js',
			'gulp/config/**/*.js',
			'test/**/*.js',
		],
		built: {
			html: [
				'gulp/work/html/merged/**/*.html',
			],
			js: [
				'gulp/work/js/merged/**/*.js',
			],
		},
	},
};
