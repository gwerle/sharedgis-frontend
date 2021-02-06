import React from 'react';
import UserMenuAvatar from '../Common/UserMenuAvatar';
import MapCard from '../Common/MapCard';
import api from '../../services/api';
import { useDispatch } from '../../store';
import { showSnackbar } from '../../store/modules/Snackbar/actions';
import { DEFAULT_ERROR_MESSAGE } from '../../config/constants';
import { Map } from '../../interfaces';

const Dashboard: React.FC = () => {
  const [maps, setMaps] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
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
  }, []);

  return (
    <>
      <div>
        <UserMenuAvatar />
      </div>
      <div style={{ display: 'flex', margin: '8% 5%' }}>
        {maps.map((map: Map) => {
          return <MapCard key={map.id} map={map} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
