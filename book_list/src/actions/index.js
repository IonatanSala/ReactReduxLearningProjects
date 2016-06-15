import { BOOK_SELECTED } from './actionTypes'

export const selectBook = (book) => {
	return {
		type: BOOK_SELECTED,
		book
	}
}
