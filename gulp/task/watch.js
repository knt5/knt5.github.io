var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch(['assets/scss/**/*.scss'], ['scss-lint']);
});
