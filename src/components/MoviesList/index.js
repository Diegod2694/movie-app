import React from 'react'
import { connect } from 'react-redux'

import { selectMovie, selectMovieThunk } from '../../redux/actions/selectMovie'
import MovieCard from './MovieCard'
import './style.scss'

const MoviesList = ( {
  movies,
  selectMovie,
  selectMovieFetch,
  persistentOnClick,
  title,
} ) => {
  console.log( 'MoviesList > movies', movies )
  const listItems = movies.map( movie => {
    return (
      <MovieCard
        key={movie.id}
        data={movie}
        onClick={(data) => {
          selectMovie(data)
          selectMovieFetch(data.id)
        }}
        persistentOnClick={persistentOnClick}
      />
    )
  } )

  return (
    <div className='MoviesList-container'>
      <h2>{title}</h2>
      <div className="list-container">
        {listItems}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  selectMovie,
  selectMovieFetch: selectMovieThunk,
}

MoviesList.defaultProps = {
  title: '',
}

export default connect( null, mapDispatchToProps )( MoviesList )