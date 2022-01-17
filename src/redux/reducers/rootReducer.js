import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import homeReducer from './homeReducer.js';
const rootReducer = combineReducers({authReducer, homeReducer});

export default rootReducer;
