import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function ModalMovieDetail( { selectedMovie } ) {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={Boolean( selectedMovie )}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          Text in a modal
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </div>
    </Modal>
  );
}

const mapStateToProps = ({selectedMovie}) => {
  console.log( 'ModalMovieDetail > mapsStateToProps > selectedMovie', selectedMovie )
  return {
    selectedMovie,
  }
}

export default connect(mapStateToProps)(ModalMovieDetail)