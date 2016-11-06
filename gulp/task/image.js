const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Minify images
gulp.task('minify:image', () => gulp.src(
	[
		'assets/img/**/*.png',
		'assets/img/**/*.jpg',
	])
	.pipe(imagemin())
	.pipe(gulp.dest('assets/img/'))
);
