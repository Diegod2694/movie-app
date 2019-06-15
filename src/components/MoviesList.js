import React from 'react'
import { connect } from 'react-redux'
import { selectMovie } from '../redux/actions/selectMovie'

const MoviesList = ( { movies, selectMovie } ) => {
  const listItems = movies.map( movie => {
    return (
      <div key={movie.title}>
        <span>{movie.title}</span>
        <button onClick={() => selectMovie( movie )} >Detalles</button>
      </div>
    )
  } )

  return (
    <div className='MoviesList-container'>
      <h2>Lista de Peliculas</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

const mapStateToProps = ({movies}) => {
  return {
    movies,
  }
}

const mapDispatchToProps = {
  selectMovie,
}

export default connect( mapStateToProps, mapDispatchToProps )( MoviesList )