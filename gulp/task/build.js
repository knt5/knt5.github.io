var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var fs = require('fs');
var mustache = require('gulp-mustache');
var rename = require('gulp-rename');

function getBaseNames() {
	var baseNames = [];
	
	for (var name of glob.sync('src/html/*.html')) {
		baseNames.push(path.basename(name, '.html'));
	}
	
	return baseNames;
}

gulp.task('build:js', function(callback) {
	var baseNames = getBaseNames();
	var doneCount = 0;
	
	for (var baseName of baseNames) {
		var params = {};
		
		for (var fileName of glob.sync('src/js/' + baseName + '/*.js')) {
			var name = path.basename(fileName, '.js');
			params[name] = fs.readFileSync(fileName);
		}
		
		gulp.src('src/js/' + baseName + '/' + baseName + '.js.mustache')
			.pipe(mustache(params))
			.pipe(rename(baseName + '.js'))
			.pipe(gulp.dest('gulp/work/js/merged/'))
			.on('end', function() {
				doneCount ++;
				if(doneCount >= baseNames.length) {
					callback();
				}
			});
	}
});
