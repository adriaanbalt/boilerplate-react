var config       = require('../config/video');
var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');

gulp.task('video', function() {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
