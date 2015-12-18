// http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin

var path = require('path');
var webpack = require('webpack');
var paths = require('./gulpfile.js/config');
var jsSrc = path.resolve(paths.sourceAssets + '/javascripts/')
var jsDest = paths.publicAssets + '/javascripts/'
var publicPath = 'assets/javascripts/'

module.exports = {
  devtool: 'eval',
  context: jsSrc,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: (__dirname + '/public/assets/javascripts'),
    filename: 'bundle.js',
    publicPath: '/assets/javascripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: jsSrc
    }]
  }
};
