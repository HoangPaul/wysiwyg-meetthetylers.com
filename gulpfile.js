var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('default', function() {
	// Empty
});

gulp.task('compile', function() {
	return gulp.src('src/Sass/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('webroot/assets/css/'));
});

