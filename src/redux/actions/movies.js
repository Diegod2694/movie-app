export const FETCH_MOVIES_REQUESTED = 'FETCH_MOVIES_REQUESTED'
export const FETCH_MOVIES_SUCCEED = 'FETCH_MOVIES_SUCCEED'
export const FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED'

const API_KEY = '36c823ce488ed54b76e15069df9fd012'

const fetchMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const rawResponse = await fetch( url )
    const response = await rawResponse.json()
    return { data: response.results }
  } catch ( error ) {
    return { error }
  }
}

const fetchMoviesRequest = () => ( {
  type: FETCH_MOVIES_REQUESTED,
} )

const fetchMoviesSuccess = movies => ( {
  type: FETCH_MOVIES_SUCCEED,
  payload: movies,
} )

const fetchMoviesFail = error => ( {
  type: FETCH_MOVIES_FAILED,
  error
} )

export const fetchMoviesThunk = () => async dispatch => {
  dispatch( fetchMoviesRequest() )
  const { data, error } = await fetchMovies()
  if ( data ) {
    return dispatch( fetchMoviesSuccess( data ) )
  } else {
    return dispatch( fetchMoviesFail( error ) )
  }
}
