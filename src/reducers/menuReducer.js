import { MENU_UPDATE_STYLE } from '../actions/actionsTypes';

const initialStyle = {
  display: 'none',
  top: 0,
  left: 0,
}

const initialState = {
  style: initialStyle,
}

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_UPDATE_STYLE:
      return {
        ...state,
        style: action.style
      }
    default:
      return state;
  }
};