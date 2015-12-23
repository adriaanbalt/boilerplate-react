import alt from '../lib/alt';

class AppActions {

  constructor () {
    /********************************************************************
     * pass camelCase actions to this.generateActions                   *
     * arguments become CONSTANT_CASED when exported                    *
     ********************************************************************/
    this.generateActions(
      'loadData',
      'websiteLoaded'
    )
  }
}

export default alt.createActions(AppActions);
