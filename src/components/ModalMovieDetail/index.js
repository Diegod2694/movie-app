import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'
import './style.scss'

import { cleanSelectedMovie } from '../../redux/actions/selectMovie'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '80%',
    minHeigth: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function ReviewCard ( { review } ) {
  return (
    <div className="ReviewCard">
      <Typography variant="h6" id="modal-title">
        Autor: {review.author}
      </Typography>
      <div className="scroll">
        <Typography variant="subtitle1" id="simple-modal-description">
          Contenido: {review.content}
        </Typography>
      </div>
    </div>
  )
}

function ModalMovieDetail( { selectedMovie, selectedMoviePreview, cleanSelectedMovie, isLoading } ) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={Boolean( selectedMoviePreview.title )}
      onClose={ () => cleanSelectedMovie()}
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          {selectedMoviePreview.title}
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Ranking: {selectedMoviePreview.vote_average}
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Fecha: {selectedMoviePreview.release_date}
        </Typography>
        <hr/>
        <div>
          <Typography variant="h6" id="modal-title">
            Reviews: 
          </Typography>
          <div className="scroll-container">
            {
              !isLoading
                ? (
                  selectedMovie.map( review => <ReviewCard review={review} /> )
                )
                : (
                  <p>Se estan cargando...</p>
                )
            }
          </div>
        </div>
      </div>
    </Modal>
  );
}

const mapStateToProps = ( { selectedMovie } ) => {
  console.log( 'ModalMovieDetail > mapsStateToProps > selectedMovie', selectedMovie )
  return {
    selectedMoviePreview: selectedMovie.selectedMoviePreview,
    selectedMovie: selectedMovie.selectedMovie,
    isLoading: selectedMovie.isLoading,
  }
}

const mapDispatchToProps = {
  cleanSelectedMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMovieDetail)