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
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');


//Tarea Sprite

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './app/templates/sprite.css'
        }
      }
    }
  }
}




gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config)) 
    .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteCSS', function() {
  return gulp.src('./app/temp/sprite/css/*.css')
  .pipe(rename('_sprite.css')) 
  .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', gulp.series(['createSprite', 'copySpriteCSS']));

//Tarea Styles
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([mixins, cssImport, cssvars({ silent: true }), nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

//Tarea Watch
gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html').on('change', browserSync.reload); 
  gulp.watch('./app/assets/styles/**/*.css', gulp.series(['styles', 'cssInject']));
});

//Tarea Inject
gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


