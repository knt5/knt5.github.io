const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Basic
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

// HTML
const mustache = require('gulp-mustache');
const htmlmin = require('gulp-htmlmin');

// JavaScript
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const named = require('vinyl-named');

// CSS

//=============================================================================
const config = {
	html: {
		base: 'src/html/',
		min: {
			collapseWhitespace: true,
			removeComments: true,
		},
	},
	js: {
		base: 'src/js/',
	},
	tmp: 'gulp/tmp/'
};

//=============================================================================
gulp.task('build', (done) => {
	//-------------------------------------------------------------------------
	// JavaScript
	gulp.src(`${config.js.base}/views/**/app.js`)
		.pipe(named((file) => {
			return 'views/' + path.dirname(file.relative);
		}))
		.pipe(gulpWebpack({
			module: {
				loaders: [{
					loader: 'babel-loader',
					query: { presets: ['es2015'] }
				}],
			},
			plugins: [
				new webpack.optimize.UglifyJsPlugin(),
			],
		}))
		.pipe(gulp.dest(config.tmp))
		.on('end', () => {
			//-----------------------------------------------------------------
			// HTML
			
			// Get mustache partials
			const partials = getPartials();
			
			// Generate HTML
			gulp.src(`${config.html.base}/views/**/app.html`)
				.pipe(plumber())
				.pipe(mustache({
					css: '',
					javascript: '',
				}, {}, partials))
				.pipe(rename(toBase))
				//.pipe(htmlmin(config.html.min))
				.pipe(gulp.dest('./'))
				.on('end', () => done());
		});
});

//=============================================================================
// Rename a file to base name of the parent directory (for gulp-rename)
function toBase(filePath) {
	filePath.basename = path.basename(filePath.dirname);
	filePath.dirname = '';
}

//=============================================================================
// Get mustache partial file data
function getPartials() {
	const partials = {};
	let key;
	
	// JavaScript
	glob.sync(`${config.js.base}/**/*.js`).forEach((filePath) => {
		if (path.basename(filePath) === 'app.js') {
			key = path.dirname(filePath).replace(config.js.base, '') + '.js';
			partials[key] = fs.readFileSync(config.tmp + key).toString();
		}
	});
	
	// HTML
	glob.sync(`${config.html.base}/**/*.html`).forEach((filePath) => {
		if (path.basename(filePath) !== 'app.html') {
			key = filePath.replace(config.html.base, '');
			partials[key] = fs.readFileSync(filePath).toString();
		}
	});
	
	return partials;
}
