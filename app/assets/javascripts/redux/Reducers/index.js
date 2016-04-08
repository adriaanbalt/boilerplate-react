/**
 * name: rootReducer
 * description: Loads new data onto the state.  Multiple reducer files can be made depending on the data being stored.  This file only stores core level state information.
 * @param state[InitialState] state object to be updated
 * @param action[Object] contains data to be used to update the state
 */

import * as ActionTypes from '../ActionTypes';
import * as InitialState from '../InitialState';

const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE :
    	// merge onto the current state
      return Object.assign({},state,{
        projects: action.projects
      });

    default:
      return state;
  }
};

export default rootReducer;
