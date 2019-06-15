import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import ModalMovieDetail from './components/ModalMovieDetail'
import MoviesList from './components/MoviesList'
import './App.css';
import { fetchMoviesThunk } from './redux/actions/movies'

function App(props) {
  useEffect(() => {
    props.fetchMovies()
  } );
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MoviesList />
      <ModalMovieDetail />
    </div>
  );
}

const mapDispatchToProps = {
  fetchMovies: fetchMoviesThunk,
}

export default connect(null, mapDispatchToProps )(App);
