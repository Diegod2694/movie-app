import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { selectedMovieReducer } from './selectedMovieReducer'

export default combineReducers( {
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
} )