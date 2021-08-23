var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('gulp4-run-sequence');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');


gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {

  return gulp.src('./app/assets/styles/styles.css')
	  .pipe(postcss([cssImport, cssvars({ silent: true }), nested, autoprefixer]))
	  .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', gulp.parallel('html','styles'));

