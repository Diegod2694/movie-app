import {
  MOVIE_SELECTED,
} from '../actions/selectMovie'

// const initialAuthState = {
//   isLoading: false,
//   movies: [],
//   error: null,
// }

export const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIE_SELECTED:
      return action.payload
    default:
      return state
  }
}
