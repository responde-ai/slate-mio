import initialValue from '../slate/initialValue';
import { EDITOR_UPDATE_VALUE } from '../actions/actionsTypes';

const initialState = {
  value: initialValue,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_UPDATE_VALUE:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
