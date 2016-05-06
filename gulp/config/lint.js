module.exports = {
	targets: {
		scss: [
			'src/scss/**/*.scss'
		],
		js: [
			'gulp/task/**/*.js',
			'gulp/config/**/*.js'
		],
		built: {
			js: [
				'gulp/work/js/merged/**/*.js'
			]
		}
	}
};
