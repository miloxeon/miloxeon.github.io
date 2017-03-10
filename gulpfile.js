var gulp = require('gulp'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	inlineSource = require('gulp-inline-source');


gulp.task('css', function () {
	gulp.src('src/css/*.css')
		.pipe(concat('bundle.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('src/css/'))
});

gulp.task('js', function () {
	gulp.src('src/js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js/'))
});

gulp.task('html', function () {
	gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(inlineSource())
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['css', 'js', 'html']);
