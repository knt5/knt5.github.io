const glob = require('glob');
const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const mustache = require('gulp-mustache');
const uglify = require('gulp-uglify');
const sass = require('gulp-ruby-sass');
const htmlmin = require('gulp-htmlmin');

// Get build targets base name
function getBaseNames() {
	const baseNames = [];

	glob.sync('src/html/*.html').forEach((name) => {
		baseNames.push(path.basename(name, '.html'));
	});

	return baseNames;
}

// JavaScript merge task (with mustache)
gulp.task('build:merge:js', (callback) => {
	const baseNames = getBaseNames();
	let doneCount = 0;

	baseNames.forEach((baseName) => {
		const params = {};

		glob.sync(`src/js/${baseName}/*.js`).forEach((fileName) => {
			const name = path.basename(fileName, '.js');
			params[name] = fs.readFileSync(fileName).toString();
		});

		gulp.src(`src/js/${baseName}/${baseName}.js.mustache`)
		.pipe(plumber())
		.pipe(mustache(params))
		.pipe(rename(`${baseName}.js`))
		.pipe(gulp.dest('gulp/work/js/merged/'))
		.on('end', () => {
			doneCount++;
			if (doneCount >= baseNames.length) {
				callback();
			}
		});
	});
});

// JavaScript build task
gulp.task('build:js', ['build:merge:js'], () => gulp.src('gulp/work/js/merged/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('gulp/work/js/minified/'))
);

// CSS build task
gulp.task('build:css', () => sass('src/scss/**/*.scss', { style: 'compressed' })
	.on('error', sass.logError)
	.pipe(rename({ dirname: '' }))
	.pipe(gulp.dest('gulp/work/css/built/'))
);

// HTML build task
gulp.task('build:html', ['build:js', 'build:css'], (callback) => {
	const baseNames = getBaseNames();
	let doneCount = 0;

	baseNames.forEach((baseName) => {
		const partials = {};

		glob.sync('src/html/parts/*.html').forEach((name) => {
			partials[path.basename(name, '.html')] = fs.readFileSync(name).toString();
		});

		gulp.src(`src/html/${baseName}.html`)
		.pipe(plumber())
		.pipe(mustache({
			css: fs.readFileSync(`gulp/work/css/built/${baseName}.css`).toString(),
			javascript: fs.readFileSync(`gulp/work/js/minified/${baseName}.js`).toString(),
		}, {}, partials))
		.pipe(gulp.dest('gulp/work/html/merged/'))
		.on('end', (baseNameInClosure => () => {
			gulp.src(`gulp/work/html/merged/${baseNameInClosure}.html`)
			.pipe(plumber())
			.pipe(htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			}))
			.pipe(gulp.dest('./'))
			.on('end', () => {
				doneCount++;
				if (doneCount >= baseNames.length) {
					callback();
				}
			});
		})(baseName));
	});
});

// Build all
gulp.task('build', ['build:html'], () => {
});
