var gulp = require('gulp');
var config = require('../config/config');

gulp.task('watch', function() {
	gulp.watch(config.lint.targets.scss, ['scsslint']);
	gulp.watch(config.lint.targets.js, ['eslint']);
	gulp.watch(config.build.watchTargets, ['build']);
});
