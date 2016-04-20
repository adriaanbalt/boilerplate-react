// http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin

var path = require('path');
var webpack = require('webpack');
var config = require('./');
var jsSrc = path.resolve(config.sourceAssets + '/javascripts/');
var jsDest = path.resolve(config.publicAssets + '/javascripts/');
var webpackManifest = require('../lib/webpackManifest');

module.exports = function(env) {
  // get server port
  return {
    devtool: 'eval',
    context: jsSrc,
    entry: [
      'webpack-dev-server/client?http://localhost:' + process.env.PORT,
      'webpack/hot/only-dev-server',
      './index'
    ],
    output: {
      path: jsDest,
      filename: 'bundle.js',
      publicPath: '/assets/javascripts'
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
        loaders: ['react-hot','babel'],
        include: [jsSrc]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
            optional: ["es7.decorators", "es7.classProperties"]
        },
        include: [jsSrc]
      }]
    }
  };
};
