var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['compile'], function() {
	// Empty
});

gulp.task('compile', ['html', 'css', 'js'], function() {
	// Empty
});

gulp.task('image', function() {
	return gulp.src('./webroot/images/*.{png,jpg,jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest('webroot/images/'));
});

gulp.task('html', function() {
	return gulp.src(['templates/*.html', '!templates/all.html'])
		.pipe(concat('all.html'))
		.pipe(gulp.dest('templates/'));
});

gulp.task('css', function() {
	return gulp.src('src/Sass/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('webroot/assets/css/'));
});

gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('webroot/assets/js'));
});

