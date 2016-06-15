import { combineReducers } from 'redux';
import postsReducer from './post_reducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
