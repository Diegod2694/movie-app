import {
  FETCH_MOVIES_REQUESTED,
  FETCH_MOVIES_SUCCEED,
  FETCH_MOVIES_FAILED,
} from '../actions/movies'

const initialAuthState = {
  isLoading: false,
  movies: [
    { title: 'Spiderman', releaseDate: '26-20-1994', rating: 7.4 }
  ],
  error: null,
}

export const moviesReducer = ( state = initialAuthState, action ) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_MOVIES_SUCCEED:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      }
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}