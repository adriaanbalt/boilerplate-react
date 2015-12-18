var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/assets/videos/**/*',
  src: [config.sourceDirectory + '/assets/videos/**/*'],
  dest: config.publicDirectory + '/assets/videos/'
}
