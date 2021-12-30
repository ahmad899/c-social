import * as actionTypes from '../actions/authActionTypes.js';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const initialState = {
  userSigned: null,
  isSigningUp: false,
  signUpError: false,

  isSigningIn: false,
  signInError: false,

  isPhoneConfirmed: false,
  confirm: null,
  errorMsg: '',
  user: {},
  imgUri:
    'https://icons-for-free.com/iconfiles/png/512/add+user+profile+snapchat+icon-1320191296395558816.png',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNED_OR_NO:
      return {...state, userSigned: action.payload};
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        user: action.payload,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        signUpError: false,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signUpError: true,
        errorMsg: action.payload,
      };
    case actionTypes.CHK_CONFIRM_NUM:
      return {
        ...state,
        isPhoneConfirmed: true,
      };

    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isSigningIn: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        signInError: false,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        signInError: true,
        errorMsg: action.payload,
      };

    case actionTypes.PICK_IMAGE_FROM_DEVICE:
      return {
        ...state,
        imgUri: action.payload,
      };
    case actionTypes.SET_CONFIRM:
      return {
        ...state,
        confirm: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
