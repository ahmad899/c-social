import {Alert} from 'react-native';
import {auth, firestore, storage} from '../../firebaseConfig/firebaseConfig';
import firebase from 'firebase/compat';
export const USER_SIGNED_OR_NO = 'USER_SIGNED_OR_NO';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const CHK_CONFIRM_NUM = 'CHK_CONFITM_NUM';

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

const chkCofirmNumber = () => {
  type: CHK_CONFIRM_NUM;
};
//check if user signed or no
export const firebaseAuthStateChange = () => dispatch => {
  auth.onAuthStateChanged(user => {
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
  const reference = storage.ref(
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
  auth
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
  auth
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
export const signUpWithPhoneNumber = phoneNumber => dispatch => {
  dispatch(requestSignUp());
  (async () => {
    try {
      const confirmation = await auth.signInWithPhoneNumber(phoneNumber, true);
      Promise.resolve();
      console.log(confirmationResult);
    } catch (e) {
      alert(e);
    }
  })();
};

export const confirmCodePhoneNumber = async code => {
  try {
    await confirm.confirm(code);
  } catch (e) {
    Alert.alert('error', 'Error');
  }
};
