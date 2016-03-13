var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat =require('gulp-concat');

gulp.task('default', function() {
	// Empty
});

gulp.task('compile', function() {
	gulp.src('src/Sass/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('webroot/assets/css/'));

	gulp.src(['templates/*.html', '!templates/all.html'])
		.pipe(concat('all.html'))
		.pipe(gulp.dest('templates/'));
});

