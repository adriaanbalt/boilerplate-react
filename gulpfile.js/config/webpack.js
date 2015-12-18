var path            = require('path')
var paths           = require('./')
var webpack         = require('webpack')
var webpackManifest = require('../lib/webpackManifest')

/***********************************************************************
 * @TODO: Reconcile development/test/production cofiguration.          *
 * Webpack's dev configuration is now handled in webpack.config.js     *
 * This file is currently used for production **only**.                *
 ***********************************************************************
 * @TODO: Rewrite gulpfile.js/tasks/webpack-production.js              *
 ***********************************************************************/
module.exports = function(env) {
  var jsSrc = path.resolve(paths.sourceAssets + '/javascripts/')
  var jsDest = paths.publicAssets + '/javascripts/'
  var publicPath = 'assets/javascripts/'

  var webpackConfig = {
    context: jsSrc,

    plugins: [],

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'react-hot',
          include: jsSrc
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            optional: ["es7.decorators", "es7.classProperties"]
          },
          include: jsSrc
        }
      ]
    }
  };

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry= {     // outputs { ... values} => [key.js]
      bundle: [
        './index.js' // enters the application from index.js and outputs bundle.js (the property name)
      ],
    };

    webpackConfig.output= {
      path: jsDest,
      filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    };

    // Factor out common dependencies into a shared.js
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      })
    );
  }

  if(env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;

    console.log('webpackConfig entry: ', webpackConfig.entry);

  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, 'public'),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}
