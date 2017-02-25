const fs = require('fs');
const path = require('path');
const glob = require('glob');
const gulp = require('gulp');
const mustache = require('gulp-mustache');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

const config = {
	html: {
		base: 'src/html/',
		min: {
			collapseWhitespace: true,
			removeComments: true,
		},
	},
};

gulp.task('build', () => {
	
	//-------------------------------------------------------------------------
	// Javascript
	
	
	//-------------------------------------------------------------------------
	// CSS
	
	
	//-------------------------------------------------------------------------
	// HTML
	const partials = getPartials();
	return gulp.src('src/html/views/**/app.html')
		.pipe(plumber())
		.pipe(mustache({
			css: '',
			javascript: '',
		}, {}, partials))
		.pipe(rename(toDirBase))
		.pipe(htmlmin(config.html.min))
		.pipe(gulp.dest('./'));
});

//=============================================================================
// Rename a file to base name of the parent directory (for gulp-rename)
function toDirBase(filePath) => {
	filePath.basename = path.basename(filePath.dirname);
	filePath.dirname = '';
}

//=============================================================================
// Get mustache partial file data
function getPartials() {
	const base = config.html.base;
	const partials = {};
	let key;
	
	glob.sync('src/**/*.html').forEach((filePath) => {
		if (filePath.startsWith(base)) {
			if (path.basename(filePath) !== 'app.html') {
				key = filePath.replace(base, '');
				partials[key] = fs.readFileSync(filePath).toString();
			}
		}
	});
	
	return partials;
}
