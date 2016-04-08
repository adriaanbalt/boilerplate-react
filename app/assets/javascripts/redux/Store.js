/**
 * name: Store
 * description: Redux boilerplate logic to initialize the store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import RootReducer from './Reducers';
import { DevTools } from './DevTools';

export function configureStore(initialState) {

  let finalCreateStore;

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(thunk)(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  }

  const store = finalCreateStore(RootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for Reducers
    module.hot.accept('./Reducers', () => {
      const nextReducer = require('./Reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
