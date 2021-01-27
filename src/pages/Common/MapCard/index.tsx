import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Map } from '../../../interfaces';
import moment from 'moment';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch } from '../../../store';
import { saveCurrentMapId } from '../../../store/modules/Map/actions';
import { useHistory } from 'react-router-dom';

interface MapCardProps {
  map: Map;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '20px',
    cursor: 'pointer',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MapCard({ map }: MapCardProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToMap = (mapId: string) => {
    dispatch(saveCurrentMapId(mapId));
    history.push(`/map/${mapId}`);
  };

  return (
    <Card onClick={() => redirectToMap(map.id)} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {map.map_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Criado em: {moment(map.created_at).format('DD/MM/YYYY')}
        </Typography>
        <Typography variant="body2" component="p">
          {map.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
