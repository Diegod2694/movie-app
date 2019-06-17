import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 275,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MovieCard( { data, onClick, persistentOnClick } ) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Ranking: {data.vote_average}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.release_date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onClick( data )} size="small">Ver detalle</Button>
      </CardActions>
      <CardActions>
        <Button
          onClick={() => persistentOnClick( data )}
          size="small"
        >
          {
            data.isFavorite
              ? 'Borra de favoritos'
              : 'Agregar a Favoritos'
          }
        </Button>
      </CardActions>
    </Card>
  );
}
