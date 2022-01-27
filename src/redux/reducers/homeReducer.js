import {
  CREATE_NEW_POST,
  CLEAR_POST,
  CLEAR_POST_IMAGE,
} from '../actions/homeActions/homeActionTypes';
const initialState = {
  post: {type: null},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {...state, post: {...state.post, ...action.payload}};
    case CLEAR_POST:
      return {...state, post: initialState.post};
    case CLEAR_POST_IMAGE:
      return {...state, post: {...state.post, imageUri: null}};

    default:
      return state;
  }
};
export default homeReducer;
