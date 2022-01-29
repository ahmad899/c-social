import {
  CREATE_NEW_POST,
  CLEAR_POST,
  CLEAR_POST_IMAGE,
  RECIVE_POSTS,
} from '../actions/homeActions/homeActionTypes';
const initialState = {
  post: {type: null},
  postFromDB: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {...state, post: {...state.post, ...action.payload}};
    case CLEAR_POST:
      return {...state, post: {type: null}};
    case CLEAR_POST_IMAGE:
      return {...state, post: {...state.post, imageUri: null, type: null}};
    case RECIVE_POSTS:
      return {
        ...state,
        postFromDB: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
