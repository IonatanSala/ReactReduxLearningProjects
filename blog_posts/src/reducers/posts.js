import { FETCH_POSTS, FETCH_POST } from '../actions/actionTypes'

const INITIAL_STATE = { all: [], post: null };

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}

export default postsReducer
