import { sideMenuReducer } from './sideMenuReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  sideMenuState: sideMenuReducer,
});
