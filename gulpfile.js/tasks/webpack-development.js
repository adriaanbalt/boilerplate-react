var assign       = require('object-assign')
var config       = require('../../webpack.config')
var WebpackDevServer = require('webpack-dev-server');
var gulp         = require('gulp')
var logger       = require('../lib/compileLogger')
var webpack      = require('webpack')

gulp.task('webpack:development', function(callback) {

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: './public',
    hot: true,
    stats: { colors: true },
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
});
