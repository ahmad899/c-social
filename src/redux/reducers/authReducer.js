import * as actionTypes from '../actions/authActionTypes.js';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const initialState = {
  isSigningIn: false,
  signUpError: false,
  errorMsg: '',
  user: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        signUpError: false,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        signUpError: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
