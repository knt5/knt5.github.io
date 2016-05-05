var gulp = require('gulp');
var config = require('../config/config');

gulp.task('watch', function() {
	gulp.watch(config.lint.targets.scss, ['scss-lint']);
	gulp.watch(config.lint.targets.js, ['eslint']);
});
