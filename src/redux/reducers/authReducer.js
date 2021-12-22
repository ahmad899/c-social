import * as actionTypes from '../actions/authActionTypes.js';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const initialState = {
  isSigningIn: false,
  signUpError: false,
  errorMsg: '',
  user: {},
  imgUri:
    'https://icons-for-free.com/iconfiles/png/512/add+user+profile+snapchat+icon-1320191296395558816.png',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningIn: true,
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
    case actionTypes.PICK_IMAGE_FROM_DEVICE:
      return {
        ...state,
        imgUri: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
