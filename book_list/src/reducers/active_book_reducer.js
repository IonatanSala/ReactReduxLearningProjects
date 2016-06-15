import { BOOK_SELECTED } from '../actions/actionTypes'
const initialState = {}

const activeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.book
    default:
      return state
  }
}

export default activeBookReducer
