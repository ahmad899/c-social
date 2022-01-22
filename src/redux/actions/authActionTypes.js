import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

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

export const SIGN_OUT_SET_DEFAULT_STATE = 'SIGN_OUT_SET_DEFAULT_STATE';
///////////action creators /////////////
const userSignedOrNo = check => ({type: USER_SIGNED_OR_NO, payload: check});

const requestSignUp = () => ({type: SIGNUP_REQUEST});
const reciveSignUp = user => ({type: SIGNUP_SUCCESS, payload: user});
const signUpError = err => ({type: SIGNUP_FAILURE, payload: err});

const requestLogin = () => ({type: LOGIN_REQUEST});
const reciveLogin = user => ({type: LOGIN_SUCCESS, payload: user});
const loginError = err => ({type: LOGIN_FAILURE, payload: err});

//Signout
const signOutSetDefaultState = () => ({type: SIGN_OUT_SET_DEFAULT_STATE});

//set firebase confirm function
const setConfirm = confirm => ({type: SET_CONFIRM, payload: confirm});
//change boolean of confirmation
const chkCofirmNumber = () => ({
  type: CHK_CONFIRM_NUM,
});
///////////////////START SIGNUP////////////////////////////////

//changing imageuri state to firebaseimageurl

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
const uploadSelectImageToFireBase = (imgUri, authUser, user) => dispatch => {
  dispatch(pickImageFromDevice(imgUri));

  const reference = storage().ref(
    `image/userProfileImage/${authUser.user.uid}/userProfileImage`,
  );
  const task = reference.putFile(imgUri);
  task.on('state_changed', taskSnapshot => {});
  task
    .then(res => {
      if (res.state == 'success') {
        storage()
          .ref(`image/userProfileImage/${authUser.user.uid}/userProfileImage`)
          .getDownloadURL()
          .then(photoUrl => {
            dispatch(updateUserProfile(authUser, user, photoUrl));
            dispatch(createUserFireStoreCollection(user, photoUrl));
            dispatch(userSignedOrNo(true));
          });
      }
    })
    .catch(er => console.log(er));
  return true;
};

//signing up user to firebase (email and password)
export const signUpUserFirebase = user => dispatch => {
  dispatch(requestSignUp());
  /* firebase auth create user*/
  auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(authUser => {
      dispatch(uploadSelectImageToFireBase(user.imageUri, authUser, user));
      dispatch(reciveSignUp(user));
      dispatch(userSignedOrNo(false));
    })
    .catch(err => {
      dispatch(signUpError(err));
      alert(err);
    });
};

//signing up user to firebase (phone number)
export const signUpWithPhoneNumber = user => dispatch => {
  dispatch(requestSignUp());
  auth()
    .signInWithPhoneNumber(user.phoneNumber)
    .then(confirmation => {
      dispatch(setConfirm(confirmation));
      dispatch(chkCofirmNumber());
    })
    .catch(er => dispatch(signUpError(err)));
};
//confirm number and update auth user profile and profile image url
export const confirmCodePhoneNumber = (confirm, code, user) => dispatch => {
  try {
    if (confirm) {
      confirm
        .confirm(code)
        .then(authUser => {
          dispatch(reciveSignUp(user));
          dispatch(uploadSelectImageToFireBase(user.imageUri, authUser, user));
        })
        .catch(() => dispatch(signUpError(err)));
    }
  } catch (e) {
    Alert.alert('error', e.message);
  }
};

//update new user profile
const updateUserProfile = (authUser, userInfo, photoUrl) => dispatch => {
  authUser.user.updateProfile({
    displayName: userInfo.firstName,
    photoURL: photoUrl,
  });
};

//createUser firestore collection
const createUserFireStoreCollection = (user, photoUrl) => dispatch => {
  firestore()
    .collection('user')
    .doc(user.uid)
    .set({...user, profileImageUrl: photoUrl});
};
///////////////////END SIGNUP////////////////////////////////

///////////////////START SIGNIN////////////////////////////////
//LogIn user To firebase
export const signInFirebase = user => dispatch => {
  dispatch(requestLogin());
  auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      dispatch(reciveLogin(user));
    })
    .catch(err => {
      alert('Error');
      dispatch(loginError());
    });
};

export const LogInWithPhoneNumber = number => dispatch => {
  dispatch(requestLogin());
  auth()
    .signInWithPhoneNumber(number)
    .then(confirmation => {
      dispatch(setConfirm(confirmation));
      dispatch(chkCofirmNumber());
    })
    .catch(er => dispatch(signUpError(err)));
};

export const confirmLogInCodePhoneNumber = (confirm, code) => dispatch => {
  try {
    if (confirm) {
      confirm
        .confirm(code)
        .then(authUser => {
          dispatch(reciveLogin(authUser.user));
        })
        .catch(err => dispatch(loginError(err)));
    }
  } catch (e) {
    Alert.alert('error', e.message);
  }
};

//Login with Facebook
export const onFacbookLogIn = () => dispatch => {
  const logInProcess = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    //console.log(data);
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = await auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    await auth()
      .signInWithCredential(facebookCredential)
      .then(authUser => {
        authUser.user.updateProfile({
          photoURL:
            authUser.user.photoURL +
            '?height=500&access_token=' +
            data.accessToken,
        });
      })
      .catch(err => console.log(err));

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      .then(authUser => {
        authUser.user.updateProfile({
          photoURL:
            authUser.user.photoURL +
            '?height=500&access_token=' +
            data.accessToken,
        });
      })
      .then(authUser => {
        dispatch(
          createUserFireStoreCollection(authUser.user, authUser.user.photoURL),
        );
      });
  };
  logInProcess();
};

export const signOutFromFirebase = () => dispatch => {
  dispatch(signOutSetDefaultState());
  auth().signOut();
};
