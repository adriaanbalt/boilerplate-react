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
    this.about = {};
    this.projects = [];
    this.awards = [];
    this.clients = [];

    this.getProject = (id) => {
      console.log('this.getProject', this.projects);
      return this.projects.filter(project => project.slug === id)[0];
    }

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
        console.log ( "websiteLoaded")
        this.about = data.about;
        this.projects = data.projects;
        this.awards = data.awards;
        this.clients = data.clients;
      }
    },

    this.bindListeners({
      loadData: ActionCreator.LOAD_DATA,
      toggleProject: ActionCreator.TOGGLE_PROJECT
    })

  }

  getProjectById( id ){
    return this.projects.filter(project => project.projectId === id)[0]
  }

  loadData ( o ) {
    this.loadJson( o.file_path, this.dataLoaded, o.callback );
  }

  toggleProject ( o ) {
    let projectToBeUpdated = this.getProject(o.id);
    console.log( 'toggleProject ', o, projectToBeUpdated);
    const copyOfProjectToBeUpdated = assign({}, { ... projectToBeUpdated});
    console.log( 'copyOfProjectToBeUpdated ', copyOfProjectToBeUpdated);
    projectToBeUpdated = copyOfProjectToBeUpdated;
  }

}

export default alt.createStore(AppStore, 'AppStore');
