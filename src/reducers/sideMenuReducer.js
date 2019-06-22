import {
  SIDE_MENU_UPDATE_STYLE,
  SIDE_MENU_UPDATE_HIDDEN_STATUS,
  SIDE_MENU_UPDATE_MOUSE_IN_STATUS,
  SIDE_MENU_UPDATE_EXPANDED_STATUS
} from '../actions/actionsTypes';

const initialStyle = {
  display: 'none',
  top: 0,
  left: 0,
}

const initialState = {
  style: initialStyle,
  isHidden: true,
  isMouseIn: false,
  expanded: false,
}

export const sideMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_MENU_UPDATE_STYLE:
      return {
        ...state,
        style: action.style,
      }
    case SIDE_MENU_UPDATE_HIDDEN_STATUS:
      return {
        ...state,
        isHidden: action.isHidden,
      }
    case SIDE_MENU_UPDATE_MOUSE_IN_STATUS:
      return {
        ...state,
        isMouseIn: action.isMouseIn,
      }
    case SIDE_MENU_UPDATE_EXPANDED_STATUS:
      return {
        ...state,
        isExpanded: action.isExpanded,
      }
    default:
      return state;
  }
};