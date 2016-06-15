import { FETCH_WEATHER } from '../actions/actionTypes';

const initialState = []
export default function(state = [], action) {
  console.log(state)
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    default:
      return state
  }
}
