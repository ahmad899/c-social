import {auth} from '../../firebaseConfig/firebaseConfig';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_USER_FIREBASE = 'SIGNUP_USER_FIREBASE';

///////////action creators /////////////
const requestSignUp = () => ({type: SIGNUP_REQUEST});
const reciveSignUp = user => ({type: SIGNUP_SUCCESS, payload: user});
const signUpError = err => ({type: SIGNUP_FAILURE, payload: err});

const requestLogin = () => ({type: LOGIN_REQUEST});
const reciveLogin = user => ({type: LOGIN_SUCCESS, payload: user});
const loginError = err => ({type: LOGIN_FAILURE, payload: err});

export const signUpUserFirebase = user => dispatch => {
  dispatch(requestSignUp);
  /* firebase auth create user*/
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      dispatch(reciveSignUp(user));
    })
    .catch(err => {
      dispatch(signUpError(err));
      alert(err);
    });
};
