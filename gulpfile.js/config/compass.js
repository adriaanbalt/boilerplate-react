var config = require('./');
var refills = require('node-refills').includePaths;

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] }, // https://github.com/ai/browserslist#queries
  src: config.sourceAssets + "/stylesheets/**/*.scss",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    css: config.publicAssets + '/stylesheets',
    sass: config.sourceAssets + '/stylesheets',
    image: config.publicAssets + '/images'
  }
};
