var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');
var config = require('../config/config');

// SCSS lint task
gulp.task('scsslint', function() {
	return gulp.src(config.lint.targets.scss)
	.pipe(scsslint({
		config: 'gulp/config/scsslint.yml'
	}));
});

// JavaScript lint task
gulp.task('eslint', function() {
	return gulp.src(config.lint.targets.js)
	.pipe(eslint(config.eslint))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

// Built JavaScript lint
function lintBuiltJavaScript() {
	return gulp.src(config.lint.targets.built.js)
	.pipe(eslint(config.eslint))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
}

// Built JavaScript lint task
gulp.task('eslint:built', function() {
	return lintBuiltJavaScript();
});

// Built JavaScript lint task, depended by "build:js" task
gulp.task('eslint:built:dependedByBuildJsTask', ['merge:js'], function() {
	return lintBuiltJavaScript();
});

// Lint all
gulp.task('lint', ['scsslint', 'eslint', 'eslint:built']);
