var gulp = require('gulp');
	
var concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');

var htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
	gulp.src('src/css/*.css')
		.pipe(concat('bundle.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('src/css/'))
});

gulp.task('html', function () {
	gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./'));
});