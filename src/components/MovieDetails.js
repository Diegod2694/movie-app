import React from 'react'
import { connect } from 'react-redux'

const MovieDetails = ( { selectedMovie } ) => {
  if ( !selectedMovie ) {
    return (
      <div className="MovieDetails-container" style={{ width: '70%' }}>
        <h2>Película</h2>
        <div>
          <p>Selecciona una pelicula</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="MovieDetails-container" style={{ width: '70%' }}>
        <h2>Pelicula:</h2>
        <div className="properties">
          <p>Title: {selectedMovie.title}</p>
          <p>Title: {selectedMovie.releaseDate}</p>
          <p>Title: {selectedMovie.rating}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { selectedMovie } ) => {
  return {
    selectedMovie,
  }
}

export default connect( mapStateToProps )( MovieDetails )