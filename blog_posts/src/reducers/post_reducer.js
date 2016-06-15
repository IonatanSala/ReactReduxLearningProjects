import { FETCH_POSTS } from '../actions/actionTypes'

const INITIAL_STATE = { all: [], post: null };

const postsReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
}


export default postsReducer
