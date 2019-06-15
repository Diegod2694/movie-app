export const MOVIE_PREVIEW_SELECTED = 'MOVIE_PREVIEW_SELECTED'
export const MOVIE_SELECTED_REQUESTED = 'MOVIE_SELECTED_REQUESTED'
export const MOVIE_SELECTED_SUCCEED = 'MOVIE_SELECTED_SUCCEED'
export const MOVIE_SELECTED_FAILED = 'MOVIE_SELECTED_FAILED'

const API_KEY = '36c823ce488ed54b76e15069df9fd012'

const fetchSelectedMovie = async ( id ) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    const rawResponse = await fetch( url )
    const response = await rawResponse.json()
    return { data: response.results }
  } catch ( error ) {
    return { error }
  }
}

const fetchSelectedMovieRequest = () => ( {
  type: MOVIE_SELECTED_REQUESTED,
} )

const fetchSelectedSuccess = selectedMovie => ( {
  type: MOVIE_SELECTED_SUCCEED,
  payload: selectedMovie,
} )

const fetchSelectedFail = error => ( {
  type: MOVIE_SELECTED_FAILED,
  error
} )

export const selectMovieThunk = id => async dispatch => {
  dispatch( fetchSelectedMovieRequest() )
  const { data, error } = await fetchSelectedMovie( id )
  if ( data ) {
    return dispatch( fetchSelectedSuccess( data ) )
  } else {
    return dispatch( fetchSelectedFail( error ) )
  }
}

export const selectMovie = ( movie ) => ({
  type: MOVIE_PREVIEW_SELECTED,
  payload: movie,
})
