const gulp = require('gulp'),
	  cleanCSS = require('gulp-clean-css'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename');

gulp.task('css', function() {
	return gulp.src('docs/css/scss/main.scss')
		.pipe(sass())
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('docs/css'));
});

gulp.task('watchcss', function() {
	gulp.watch('docs/css/scss/*.scss', gulp.series(['css']));
});