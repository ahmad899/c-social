import {CREATE_NEW_POST} from '../actions/homeActions/homeActionTypes';
const initialState = {
  post: {type: null},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {...state, post: action.payload};

    default:
      return state;
  }
};
export default homeReducer;
