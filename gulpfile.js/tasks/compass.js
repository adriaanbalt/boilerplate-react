var gulp          = require('gulp');
var compass       = require('gulp-compass');
var sass          = require('gulp-ruby-sass');
var sourcemaps    = require('gulp-sourcemaps');
var minifyCSS     = require('gulp-minify-css');
var handleErrors  = require('../lib/handleErrors');
var config        = require('../config/compass');
var autoprefixer  = require('gulp-autoprefixer');

gulp.task('compass', function() {
  return gulp.src(config.src)
    .pipe(compass(config.settings))
    .on('error', handleErrors)
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.dest));
});

// gulp.task('compass', function () {
//   return gulp.src('../source/sass/style.scss')
//     .pipe(sass({ compass: true, sourcemap: true, sourcemapPath: 'style.css'}))
//     .on('error', function (err) { console.log(err.message); })
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('../public/_/'));
// });