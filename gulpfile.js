var gulp = require('gulp'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin'),
	clean = require('gulp-clean'),
	inlineSource = require('gulp-inline-source'),
	gulpSequence = require('gulp-sequence');


gulp.task('clean', function () {
	return gulp.src('src/css/bundle.css', {
		read: false
	})
	.pipe(clean());
});

gulp.task('css', function () {
	return gulp.src('src/css/*.css')
		.pipe(concat('bundle.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('src/css/'))
});

gulp.task('html', function () {
	return gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(inlineSource())
		.pipe(gulp.dest('./'));
});

gulp.task('default', gulpSequence(
	'clean',
	'css',
	'html'
));
