import React from 'react';
import UserMenuAvatar from '../Common/UserMenuAvatar';
import MapCard from '../Common/MapCard';
import api from '../../services/api';
import { useDispatch } from '../../store';
import { showSnackbar } from '../../store/modules/Snackbar/actions';
import { DEFAULT_ERROR_MESSAGE } from '../../config/constants';
import { Map } from '../../interfaces';
import CreateNewMap from './CreateNewMap';
import NewMapModal from './NewMapModal';

const Dashboard: React.FC = () => {
  const [maps, setMaps] = React.useState([]);
  const [
    isModalCreateNewMapVisible,
    setModalCreateNewMapVisible,
  ] = React.useState(false);
  const [mapName, setMapName] = React.useState('');
  const [mapDescription, setMapDescription] = React.useState('');

  const dispatch = useDispatch();

  const getMaps = () => {
    api
      .get('/maps')
      .then((response: any) => {
        setMaps(response.data);
      })
      .catch(error => {
        if (error.response) {
          dispatch(showSnackbar(error.response.data.message, 'error'));
        } else {
          dispatch(showSnackbar(DEFAULT_ERROR_MESSAGE, 'error'));
        }
      });
  };

  React.useEffect(() => {
    getMaps();
  }, []);

  const handleNewMapClick = () => {
    setModalCreateNewMapVisible(!isModalCreateNewMapVisible);
  };

  const confirmCreateMap = () => {
    const body = {
      mapName,
      description: mapDescription,
    };

    api
      .post('maps', body)
      .then((response: any) => {
        dispatch(showSnackbar('Mapa criado com sucesso!'));
        setModalCreateNewMapVisible(false);
        getMaps();
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
      <div>
        <UserMenuAvatar />
      </div>
      <div style={{ display: 'flex', margin: '8% 5%' }}>
        {maps.map((map: Map) => {
          return <MapCard key={map.id} map={map} />;
        })}
        <CreateNewMap handleNewMapClick={handleNewMapClick} />
        <NewMapModal
          open={isModalCreateNewMapVisible}
          setOpen={setModalCreateNewMapVisible}
          mapName={mapName}
          setMapName={setMapName}
          mapDescription={mapDescription}
          setMapDescription={setMapDescription}
          confirmCreateMap={confirmCreateMap}
        />
      </div>
    </>
  );
};

export default Dashboard;
