var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');
var config = require('../config/config');

gulp.task('scss-lint', function() {
	return gulp.src(config.lint.targets.scss)
		.pipe(scsslint());
});

gulp.task('eslint', function() {
	return gulp.src(config.lint.targets.js)
		.pipe(eslint(config.eslint))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('lint', ['scss-lint', 'eslint']);
