var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/assets/data/**/*',
  src: [config.sourceDirectory + '/assets/data/**/*'],
  dest: config.publicDirectory + '/assets/data/'
}
