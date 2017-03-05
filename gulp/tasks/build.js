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
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

// CSS
const sass = require('gulp-sass');

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
	css: {
		base: 'src/css/',
	},
	tmp: 'gulp/tmp/'
};

//=============================================================================
gulp.task('build', (done) => {
	//-------------------------------------------------------------------------
	// JavaScript
	gulp.src(`${config.js.base}/**/app.js`)
		.pipe(named((file) => {
			return path.dirname(file.relative);
		}))
		.pipe(webpackStream({
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
			// CSS
			gulp.src(`${config.css.base}/**/app.scss`)
				.pipe(sass({
						outputStyle: 'compressed',
						includePaths: [config.css.base],
					}).on('error', sass.logError)
				)
				.pipe(rename((filePath) => {
					filePath.basename = path.basename(filePath.dirname);
					filePath.dirname = path.dirname(filePath.dirname);
				}))
				.pipe(gulp.dest(config.tmp))
				.on('end', () => {
					//---------------------------------------------------------
					// HTML
					
					// Create mustache partials
					const partials = getPartials();
					
					// Generate HTML
					gulp.src(`${config.html.base}/views/**/app.html`)
						.pipe(plumber())
						.pipe(mustache({}, {}, partials))
						.pipe(rename((filePath) => {
							filePath.basename = path.basename(filePath.dirname);
							filePath.dirname = '';
						}))
						.pipe(htmlmin(config.html.min))
						.pipe(gulp.dest('./'))
						.on('end', () => done());
				});
		});
});

//=============================================================================
// Get mustache partial file data
function getPartials() {
	const partials = {};
	let key;
	
	// JavaScript
	glob.sync(`${config.js.base}/**/app.js`).forEach((filePath) => {
		key = path.dirname(filePath).replace(config.js.base, '') + '.js';
		partials[key] = fs.readFileSync(config.tmp + key).toString();
	});
	
	// CSS
	glob.sync(`${config.css.base}/**/app.scss`).forEach((filePath) => {
		key = path.dirname(filePath).replace(config.css.base, '') + '.css';
		partials[key] = fs.readFileSync(config.tmp + key).toString();
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
