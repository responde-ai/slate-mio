import { EDITOR_UPDATE_VALUE } from './actionsTypes';

export const updateEditorState = value => ({
  type: EDITOR_UPDATE_VALUE,
  value
});
