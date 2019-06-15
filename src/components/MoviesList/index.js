import React from 'react'
import { connect } from 'react-redux'

import { selectMovie } from '../../redux/actions/selectMovie'
import MovieCard from './MovieCard'
import './style.scss'

const MoviesList = ( { movies, selectMovie } ) => {
  console.log( 'MoviesList > movies', movies )
  const listItems = movies.map( movie => {
    return (
      <MovieCard
        key={movie.id}
        data={movie}
        onClick={selectMovie}
      />
    )
  } )

  return (
    <div className='MoviesList-container'>
      <h2>Lista de Peliculas</h2>
      <div className="list-container">
        {listItems}
      </div>
    </div>
  )
}

const mapStateToProps = ({movies}) => {
  return {
    movies: movies.movies,
    isLoading: movies.isLoading,
  }
}

const mapDispatchToProps = {
  selectMovie,
}

export default connect( mapStateToProps, mapDispatchToProps )( MoviesList )