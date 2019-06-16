import { EDITOR_UPDATE_VALUE, MENU_UPDATE_STYLE } from './actionsTypes';

export const updateEditorState = value => ({
  type: EDITOR_UPDATE_VALUE,
  value
});

export const updateMenuState = value => ({
  type: MENU_UPDATE_STYLE,
  style: value,
});
