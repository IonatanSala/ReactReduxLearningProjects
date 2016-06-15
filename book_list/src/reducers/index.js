import { combineReducers } from 'redux';
import booksReducer from './reducer_books'
import activeBookReducer from './active_book_reducer'

const rootReducer = combineReducers({
	books: booksReducer,
	activeBook: activeBookReducer
});

export default rootReducer;
