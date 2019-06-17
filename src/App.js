import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import store from 'store';

import ModalMovieDetail from './components/ModalMovieDetail'
import MoviesList from './components/MoviesList'
// import Favorites from './components/Favorites'
import './App.css';
import { fetchMoviesThunk } from './redux/actions/movies'

function App(props) {
  const [favorites, setFavorite] = useState({});

  useEffect(() => {
    props.fetchMovies()
    const favorites = store.get('favorites') || {}
    console.log( 'App > useEffect > favorites', favorites )
    setFavorite(favorites)
  }, [] );

  const setFavoriteInStore = (movie) => {
    const favoritesItems = {
      ...favorites,
      [ movie.id ]: {
        ...movie,
        isFavorite: true,
      }
    }
    store.set( 'favorites', favoritesItems )
    setFavorite(favoritesItems)
  }

  const removeFavoriteFromStore = (movie) => {
    const favoritesItems = store.get( 'favorites' )
    delete favoritesItems[movie.id]
    store.set( 'favorites', favoritesItems )
    setFavorite(favoritesItems)
  }

  console.log( 'App > favorites', favorites )
  const { movies } = props
  const favoritesArr = Object.values(favorites)
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MoviesList 
        title="Lista de Peliculas"
        persistentOnClick={setFavoriteInStore}
        movies={movies}
      />
      <ModalMovieDetail />
      {
        favoritesArr.length > 0
          && (
            <MoviesList
              title="Lista de Peliculas favoritas"
              persistentOnClick={removeFavoriteFromStore}
              movies={favoritesArr}
            />
          )
      }
    </div>
  );
}

const mapStateToProps = ( { movies } ) => {
  return {
    movies: movies.movies,
    moviesIsLoading: movies.isLoading,
  }
}

const mapDispatchToProps = {
  fetchMovies: fetchMoviesThunk,
}

export default connect( mapStateToProps, mapDispatchToProps )(App);
