import {
  SIDE_MENU_UPDATE_STYLE,
  SIDE_MENU_UPDATE_HIDDEN_STATUS,
  SIDE_MENU_UPDATE_MOUSE_IN_STATUS,
  SIDE_MENU_UPDATE_EXPANDED_STATUS,
  ON_NEW_MATH_CLICK,
  ON_MATH_EDIT,
  ON_MATH_EQUATION_SUBMIT,
  ON_MATH_EQUATION_CANCEL
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

export const createNewMathEquation = () => ({
  type: ON_NEW_MATH_CLICK,
});

export const editMathEquation = value => ({
  type: ON_MATH_EDIT,
  shouldShow: value.shouldShow,
  mathContent: value.mathContent,
  selectedMathBlock: value.selectedMathBlock,
});

export const onMathEquationSubmit = value => ({
  type: ON_MATH_EQUATION_SUBMIT,
  mathContent: value,
});

export const hideMathEditor = () => ({
  type: ON_MATH_EQUATION_CANCEL,
});
