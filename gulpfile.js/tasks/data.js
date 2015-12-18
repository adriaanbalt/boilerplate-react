var config       = require('../config/data');
var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');

gulp.task('data', function() {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
