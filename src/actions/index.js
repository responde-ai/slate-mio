import {
  SIDE_MENU_UPDATE_STYLE,
  SIDE_MENU_UPDATE_HIDDEN_STATUS,
  SIDE_MENU_UPDATE_MOUSE_IN_STATUS,
  SIDE_MENU_UPDATE_EXPANDED_STATUS,
 } from './actionsTypes';

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
