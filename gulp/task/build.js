var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var fs = require('fs');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var mustache = require('gulp-mustache');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

function getBaseNames() {
	var baseNames = [];
	
	for (var name of glob.sync('src/html/*.html')) {
		baseNames.push(path.basename(name, '.html'));
	}
	
	return baseNames;
}

gulp.task('merge:js', function(callback) {
	var baseNames = getBaseNames();
	var doneCount = 0;
	
	for (var baseName of baseNames) {
		var params = {};
		
		for (var fileName of glob.sync('src/js/' + baseName + '/*.js')) {
			var name = path.basename(fileName, '.js');
			params[name] = fs.readFileSync(fileName);
		}
		
		gulp.src('src/js/' + baseName + '/' + baseName + '.js.mustache')
			.pipe(plumber())
			.pipe(mustache(params))
			.pipe(rename(baseName + '.js'))
			.pipe(gulp.dest('gulp/work/js/merged/'))
			.on('end', function() {
				doneCount ++;
				if (doneCount >= baseNames.length) {
					callback();
				}
			});
	}
});

gulp.task('build:js', ['merge:js'], function() {
	return gulp.src('gulp/work/js/merged/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('gulp/work/js/minified/'));
});

gulp.task('build:css', function() {
	return sass('src/scss/**/*.scss', { style: 'compressed' })
		.on('error', sass.logError)
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest('gulp/work/css/built/'));
});

gulp.task('build', ['build:js', 'build:css'], function() {
});
