import { ON_NEW_MATH_CLICK } from '../actions/actionsTypes';

const initialState = {
  shouldShow: false,
  mathContent: "",
  selectedMathBlock: null,
};

export const mathEditorReducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_NEW_MATH_CLICK:
      return {
        ...state,
        shouldShow: action.shouldShow,
        mathContent: action.mathContent,
        selectedMathBlock: action.selectedMathBlock,
      }
    default:
      return state;
  }
};