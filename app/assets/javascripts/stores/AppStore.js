'use strict';

import alt from '../lib/alt';
import assign from 'object-assign';
import ActionCreator from '../actions/AppActions';
import Storage from '../lib/Storage';
// import deepAssign from 'deep-assign';

/********************************************************************
 * The store is a data warehouse.                                   *
 * This is the single source of truth re: app state.                *
 * Instance vars defined anywhere in the store become the state.    *
 ********************************************************************/
class AppStore {
  constructor () {

    this.data;
    
    this.isNavOpen = false;
    this.title;

    this.loadJson = ( file_path, dataLoaded, callback ) => {
      // @TODO check cookie
      Storage.loadJson({
        file_path:file_path,
        callback: ( data ) => {
          dataLoaded( data );
          if ( callback ) callback();
        }
      });
    },

    this.dataLoaded = (data) => {
      if ( data ) {
        console.log ( "websiteLoaded" , data );
        this.data = data;
        this.title = data.title;;
      }
    },

    this.bindListeners({
      loadData: ActionCreator.LOAD_DATA,
      toggleNav: ActionCreator.TOGGLE_NAV
    })

  }

  getProjectById( id ){
    return this.data.projects.filter(project => project.projectId === id)[0]
  }

  loadData ( o ) {
    this.loadJson( o.file_path, this.dataLoaded, o.callback );
  }

  toggleNav () {
    this.isNavOpen = !this.isNavOpen;
    console.log(this.isNavOpen, "NavOpen");
  }

}

export default alt.createStore(AppStore, 'AppStore');