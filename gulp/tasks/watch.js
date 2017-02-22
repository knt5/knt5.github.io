const gulp = require('gulp');

gulp.task('watch', () => gulp.watch([
	'src/**/*.html',
	'src/**/*.scss',
	'src/**/*.js',
], ['build']));
