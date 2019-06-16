import { editorReducer } from './editorReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  editorState: editorReducer,
});
