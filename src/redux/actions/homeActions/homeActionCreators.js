import {CREATE_NEW_POST} from './homeActionTypes';
export const createNewPost = (post = {
  type: CREATE_NEW_POST,
  payload: post,
});
