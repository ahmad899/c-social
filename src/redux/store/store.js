import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

let middlewaresToApply = [thunk];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}
const middleware = applyMiddleware(...middlewaresToApply);
const store = createStore(rootReducer, middleware);
export default store;
