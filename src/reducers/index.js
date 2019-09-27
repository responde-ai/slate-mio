import { menuReducer } from './menuReducer';
import { sideMenuReducer } from './sideMenuReducer';
import { mathEditorReducer } from './mathEditorReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  menuState: menuReducer,
  sideMenuState: sideMenuReducer,
  mathEditorState: mathEditorReducer,
});
