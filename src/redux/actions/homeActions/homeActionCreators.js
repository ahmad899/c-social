import {CREATE_NEW_POST, CLEAR_POST, CLEAR_POST_IMAGE} from './homeActionTypes';
import firestore from '@react-native-firebase/firestore';
export const createNewPost = post => ({
  type: CREATE_NEW_POST,
  payload: post,
});

export const clearPost = {
  type: CLEAR_POST,
};

export const clearPostImage = {
  type: CLEAR_POST_IMAGE,
};

///async functions
export const postToFireBase = post => dispatch => {
  firestore().collection('posts').doc().set({post: post});
};
