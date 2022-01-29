import {
  CREATE_NEW_POST,
  CLEAR_POST,
  CLEAR_POST_IMAGE,
  RECIVE_POSTS,
} from './homeActionTypes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const createNewPost = post => ({
  type: CREATE_NEW_POST,
  payload: post,
});

export const clearPost = () => ({
  type: CLEAR_POST,
});

export const clearPostImage = () => ({
  type: CLEAR_POST_IMAGE,
});

const recivePosts = postFromDB => ({
  type: RECIVE_POSTS,
  payload: postFromDB,
});
///async functions
////User Post saved in firestore
export const postToFireBase = post => (dispatch, getState) => {
  if (post.type == null) {
    post.type = 'text';
  }
  const finalPost = {
    ...post,
    userImg: auth().currentUser.photoURL,
    userName: auth().currentUser.displayName,
    timeStamp: firestore.Timestamp.now(),
    likes: '',
    comments: {},
  };

  firestore()
    .collection('posts')
    .doc()
    .set({post: finalPost, userId: auth().currentUser.uid})
    .then(res => {
      console.log('succesfully');
      dispatch(clearPost());
    });
};

///recive posts of users and set it into the state

export const recivePostFromFirestore = () => dispatch => {
  firestore()
    .collection('posts')
    .get()
    .then(res => dispatch(recivePosts(res.docs.map(doc => doc.data()))));
};
