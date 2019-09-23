import { ON_NEW_MATH_CLICK, ON_MATH_EDIT, ON_MATH_EQUATION_SUBMIT, ON_MATH_EQUATION_CANCEL } from '../actions/actionsTypes';

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
        shouldShow: true,
        mathContent: "",
        selectedMathBlock: null,
      }
    case ON_MATH_EDIT:
      return {
        ...state,
        shouldShow: true,
        mathContent: action.mathContent,
        selectedMathBlock: action.selectedMathBlock
      }
    case ON_MATH_EQUATION_CANCEL:
      return {
        ...state,
        shouldShow: false,
      }
    case ON_MATH_EQUATION_SUBMIT:
      return {
        ...state,
        shouldShow: false,
        mathContent: action.mathContent,
      }
    default:
      return state;
  }
};