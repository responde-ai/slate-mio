import { ON_NEW_MATH_CLICK, ON_MATH_EQUATION_SUBMIT, ON_MATH_BLOCK_CREATED_OR_UPDATED } from '../actions/actionsTypes';

const initialState = {
  shouldShow: false,
  mathContent: "",
  selectedMathBlock: null,
  shouldUpdateOrCreateMathBlock: false,
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
    case ON_MATH_EQUATION_SUBMIT:
      return {
        ...state,
        shouldShow: false,
        mathContent: action.mathContent,
        shouldUpdateOrCreateMathBlock: true,
      }
    case ON_MATH_BLOCK_CREATED_OR_UPDATED:
      return {
        ...state,
        shouldUpdateOrCreateMathBlock: false,
        mathContent: "",
        selectedMathBlock: null,
      }
    default:
      return state;
  }
};