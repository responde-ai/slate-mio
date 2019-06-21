import { editorReducer } from './editorReducer';
import { menuReducer } from './menuReducer';
import { sideMenuReducer } from './sideMenuReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  editorState: editorReducer,
  menuState: menuReducer,
  sideMenuState: sideMenuReducer,
});
