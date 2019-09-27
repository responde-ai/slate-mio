import { sideMenuReducer } from './sideMenuReducer';
import { mathEditorReducer } from './mathEditorReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  sideMenuState: sideMenuReducer,
  mathEditorState: mathEditorReducer,
});
