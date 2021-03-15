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
import ShareModal from './ShareModal';
import { showSnackbar } from '../../../store/modules/Snackbar/actions';
import { DEFAULT_ERROR_MESSAGE } from '../../../config/constants';
import api from '../../../services/api';

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
  const [isShareMapModalVisible, setShareMapModalVisible] = React.useState(
    false,
  );
  const [emailValue, setEmailValue] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToMap = (mapId: string) => {
    dispatch(saveCurrentMapId(mapId));
    history.push(`/map/${mapId}`);
  };

  const handleShareButtonClick = (event: any) => {
    event.stopPropagation();

    setShareMapModalVisible(true);
  };

  const confirmShareMap = () => {
    const body = {
      user: emailValue,
    };

    api
      .put(`maps/${map.id}/share`, body)
      .then((response: any) => {
        dispatch(showSnackbar('Mapa compartilhado com sucesso!'));
        setShareMapModalVisible(false);
      })
      .catch(error => {
        if (error.response) {
          dispatch(showSnackbar(error.response.data.message, 'error'));
        } else {
          dispatch(showSnackbar(DEFAULT_ERROR_MESSAGE, 'error'));
        }
      });
  };

  return (
    <>
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
          <IconButton onClick={handleShareButtonClick}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ShareModal
        open={isShareMapModalVisible}
        setOpen={setShareMapModalVisible}
        emailValue={emailValue}
        setEmailValue={setEmailValue}
        confirmShare={confirmShareMap}
      />
    </>
  );
}
