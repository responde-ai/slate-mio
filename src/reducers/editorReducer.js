import initialValue from '../slate/initialValue';
import { EDITOR_UPDATE_VALUE, ON_EDITOR_KEY_UP, ON_EDITOR_CLICK } from '../actions/actionsTypes';

const initialState = {
  value: initialValue,
  keyCode: -1,
  lastClickX: -1,
  lastClickY: -1,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_UPDATE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case ON_EDITOR_KEY_UP:
      return {
        ...state,
        keyCode: action.keyCode,
      };
    case ON_EDITOR_CLICK:
      return {
        ...state,
        lastClickX: action.x,
        lastClickY: action.y,
      }
    default:
      return state;
  }
};
