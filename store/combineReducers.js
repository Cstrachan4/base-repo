import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import homepage from './reducers/homepage';

export default function configureStore(preloadedState = {}) {
  const reducer = combineReducers({
    homepage: homepage
  });

  return createStore(reducer, preloadedState, composeWithDevTools());
}
