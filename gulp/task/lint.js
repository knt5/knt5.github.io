const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');
const scsslint = require('gulp-scss-lint');
const eslint = require('gulp-eslint');
const config = require('../config/config');

// HTML hint task
gulp.task('lint:html:built', () => gulp.src(config.lint.targets.built.html)
	.pipe(plumber())
	.pipe(htmlhint())
	.pipe(htmlhint.reporter())
);

// SCSS lint task
gulp.task('lint:scss', () => gulp.src(config.lint.targets.scss)
	.pipe(plumber())
	.pipe(scsslint({
		config: 'gulp/config/scsslint.yml',
	}))
);

// JavaScript lint task
gulp.task('lint:js', () => gulp.src(config.lint.targets.js)
	.pipe(plumber())
	.pipe(eslint(config.eslint))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
);

// Built JavaScript lint task
gulp.task('lint:js:built', () => gulp.src(config.lint.targets.built.js)
	.pipe(plumber())
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
);

// Lint all
gulp.task('lint', [
	'lint:html:built',
	'lint:scss',
	'lint:js',
	'lint:js:built',
]);
