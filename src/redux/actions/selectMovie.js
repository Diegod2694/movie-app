export const MOVIE_SELECTED = 'MOVIE_SELECTED'

export const selectMovie = ( movie ) => ({
  type: MOVIE_SELECTED,
  payload: movie,
})
