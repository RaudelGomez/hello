var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('gulp4-run-sequence');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var browserSync = require('browser-sync').create();




gulp.task('styles', function() {

  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([mixins, cssImport, cssvars({ silent: true }), nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('initial', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  gulp.task('./app/index.html', function() {
  browserSync.reload();
  });

});

 gulp.task('cssInject', gulp.series('styles'), function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('watch', gulp.series('initial', 'cssInject'));

gulp.task('default', gulp.series('watch'));

