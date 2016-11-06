const gulp = require('gulp');
const config = require('../config/config');

gulp.task('watch', () => {
	// Build targets
	gulp.watch(config.build.watchTargets, ['build']);

	// Lint targets: scss and js
	gulp.watch(config.lint.targets.scss, ['lint:scss']);
	gulp.watch(config.lint.targets.js, ['lint:js']);

	// Lint targets: built html and js
	gulp.watch(config.lint.targets.built.html, ['lint:html:built']);
	gulp.watch(config.lint.targets.built.js, ['lint:js:built']);
});
