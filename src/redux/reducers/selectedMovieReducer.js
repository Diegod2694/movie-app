import {
  MOVIE_PREVIEW_SELECTED,
  MOVIE_SELECTED_REQUESTED,
  MOVIE_SELECTED_SUCCEED,
  MOVIE_SELECTED_FAILED,
  CLEAN_SELECTED_MOVIE,
} from '../actions/selectMovie'

const initialAuthState = {
  isLoading: false,
  selectedMovie: [],
  selectedMoviePreview: {},
  error: null,
}

export const selectedMovieReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case MOVIE_PREVIEW_SELECTED:
      return {
        ...state,
        selectedMoviePreview: action.payload,
      }
    case CLEAN_SELECTED_MOVIE:
      return initialAuthState
    case MOVIE_SELECTED_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }
    case MOVIE_SELECTED_SUCCEED:
      return {
        ...state,
        isLoading: false,
        selectedMovie: action.payload,
      }
    case MOVIE_SELECTED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
