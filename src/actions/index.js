import {
  EDITOR_UPDATE_VALUE,
  ON_EDITOR_KEY_UP,
  MENU_UPDATE_STYLE,
  SIDE_MENU_UPDATE_STYLE,
  SIDE_MENU_UPDATE_HIDDEN_STATUS,
  SIDE_MENU_UPDATE_MOUSE_IN_STATUS,
  SIDE_MENU_UPDATE_EXPANDED_STATUS,
  ON_EDITOR_CLICK,
 } from './actionsTypes';

export const updateEditorState = value => ({
  type: EDITOR_UPDATE_VALUE,
  value
});

export const onEditorKeyUp = value => ({
  type: ON_EDITOR_KEY_UP,
  keyCode: value,
});

export const onEditorClick = value => ({
  type: ON_EDITOR_CLICK,
  x: value.x,
  y: value.y
});

export const updateMenuState = value => ({
  type: MENU_UPDATE_STYLE,
  style: value,
});

export const updateSideMenuState = value => ({
  type: SIDE_MENU_UPDATE_STYLE,
  style: value,
});

export const updateSideMenuHiddenStatus = value => ({
  type: SIDE_MENU_UPDATE_HIDDEN_STATUS,
  isHidden: value,
});

export const updateSideMenuMouseInStatus = value => ({
  type: SIDE_MENU_UPDATE_MOUSE_IN_STATUS,
  isMouseIn: value
});

export const updateSideMenuExpandedStatus = value => ({
  type: SIDE_MENU_UPDATE_EXPANDED_STATUS,
  isExpanded: value,
});
