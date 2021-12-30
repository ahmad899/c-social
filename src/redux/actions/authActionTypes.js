import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import check from '@react-native-firebase/app-check';
export const USER_SIGNED_OR_NO = 'USER_SIGNED_OR_NO';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const CHK_CONFIRM_NUM = 'CHK_CONFITM_NUM';
export const SET_CONFIRM = 'SET_CONFIRM';

export const SIGNUP_USER_FIREBASE = 'SIGNUP_USER_FIREBASE';
export const PICK_IMAGE_FROM_DEVICE = 'PICK_IMAGE_FROM_DEVICE';
export const UPLOADE_IMAGE_TO_FIREBASE = 'UPLOADE_IMAGE_TO_FIREBASE';
///////////action creators /////////////
const userSignedOrNo = check => ({type: USER_SIGNED_OR_NO, payload: check});

const requestSignUp = () => ({type: SIGNUP_REQUEST});
const reciveSignUp = user => ({type: SIGNUP_SUCCESS, payload: user});
const signUpError = err => ({type: SIGNUP_FAILURE, payload: err});

const requestLogin = () => ({type: LOGIN_REQUEST});
const reciveLogin = user => ({type: LOGIN_SUCCESS, payload: user});
const loginError = err => ({type: LOGIN_FAILURE, payload: err});

const setConfirm = confirm => ({type: SET_CONFIRM, payload: confirm});

const chkCofirmNumber = () => ({
  type: CHK_CONFIRM_NUM,
});
//check if user signed or no
export const firebaseAuthStateChange = () => dispatch => {
  auth().onAuthStateChanged(user => {
    user ? dispatch(userSignedOrNo(true)) : dispatch(userSignedOrNo(false));
  });
};

// get the image uri from device
export const pickImageFromDevice = imgUri => ({
  type: PICK_IMAGE_FROM_DEVICE,
  payload: imgUri,
});

//uplaod userProfile image to firebase storage
const uploadSelectImageToFireBase = (imgUri, uid) => dispatch => {
  dispatch(pickImageFromDevice(imgUri));
  const reference = storage().ref(
    `image/userProfileImage/${uid}/userProfileImage`,
  );
  const task = reference.put(imgUri);
  task
    .then(() => {
      console.log('Image uploaded to the bucket!');
    })
    .catch(() => Alert.alert('Error'));
};

//LogIn user To firebase
export const signInFirebase = user => dispatch => {
  dispatch(requestLogin());
  auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      dispatch(reciveLogin(user));
    })
    .catch(err => {
      Alert.alert('error');
      dispatch(loginError());
    });
};

//signing up user to firebase (email and password)
export const signUpUserFirebase = user => dispatch => {
  dispatch(requestSignUp());
  /* firebase auth create user*/
  auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      dispatch(reciveSignUp(user));
      dispatch(uploadSelectImageToFireBase(user.imageUri, res.user.uid));
    })
    .catch(err => {
      dispatch(signUpError(err));
      Alert.alert('Error');
    });
};

//signing up user to firebase (phone number)
export const signUpWithPhoneNumber = user => dispatch => {
  dispatch(requestSignUp());
  auth().settings.appVerificationDisabledForTesting = true;
  auth()
    .signInWithPhoneNumber(user.phoneNumber)
    .then(() => {
      dispatch(setConfirm(confirmation));
      dispatch(chkCofirmNumber());
    })
    .then(users =>
      users.updateProfile({
        displayName: user.firstName,
        photoURL: user.imageUri,
        phoneNumber: user.phoneNumber,
      }),
    )
    .catch(er => console.log(er));
};

export const confirmCodePhoneNumber = (confirm, code) => dispatch => {
  try {
    confirm.confirm(code);
  } catch (e) {
    Alert.alert('error', e.message);
  }
};
