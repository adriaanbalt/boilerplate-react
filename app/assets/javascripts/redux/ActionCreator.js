/**
 * name: ActionCreator
 * description: Combining an event name (ActionType) with data that to be stored onto the state with the Reducer
 */

import * as ActionTypes from './ActionTypes';

export default {

  initialize({obj: obj}) {
    return {
      type: ActionTypes.INITIALIZE,
      obj
    };
  }
  
};