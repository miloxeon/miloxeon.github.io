var gulp = require('gulp'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');

gulp.task("default", function () {
	gulp.src("src/css/*.css")
		.pipe(concat('bundle.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest("src/css/"))
});
