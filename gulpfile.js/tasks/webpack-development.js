var assign       = require('object-assign')
var config       = require('../../webpack.config')
var WebpackDevServer = require('webpack-dev-server');
var gulp         = require('gulp')
var logger       = require('../lib/compileLogger')
var webpack      = require('webpack')

gulp.task('webpack:development', function(callback) {
  console.log ( 'webpack development', process.env.PORT );
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: './public',
    hot: true,
    stats: { colors: true },
    historyApiFallback: true
  }).listen(process.env.PORT, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:', process.env.PORT);
  });
});
