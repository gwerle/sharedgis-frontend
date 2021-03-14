import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { deleteItem } from '../../../services/PointsGeomService';
import DeleteConfirmModal from './DeleteConfirmModal';
import {
  getAccessibilityRamps,
  getTrainCross,
  getTrafficLights,
  getSidewalkObstacles,
  getBusStops,
  getBikeParks,
  getBikeSupportPoints,
  getTaxiStops,
} from '../../../store/modules/PointsGeom/thunks';
import {
  getRoads,
  getTrains,
  getBicyclePaths,
  getSidewalks,
} from '../../../store/modules/LinesGeom/thunks';
import { useDispatch } from '../../../store';

export default function DeleteComponent({ url, id }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const openModalConfirm = () => {
    setOpen(true);
  };

  const confirmDelete = () => {
    deleteItem(url, id).then(() => getGeomByLayer(url));
  };
  const getGeomByLayer = layer => {
    const [, , map_id] = window.location.pathname.split('/');

    switch (layer) {
      case 'accessibility-ramps':
        return dispatch(getAccessibilityRamps(map_id));
      case 'roads':
        return dispatch(getRoads(map_id));
      case 'trains':
        return dispatch(getTrains(map_id));
      case 'train-cross':
        return dispatch(getTrainCross(map_id));
      case 'bicycle-paths':
        return dispatch(getBicyclePaths(map_id));
      case 'bike-parks':
        return dispatch(getBikeParks(map_id));
      case 'bike-support-points':
        return dispatch(getBikeSupportPoints(map_id));
      case 'taxi-stops':
        return dispatch(getTaxiStops(map_id));
      case 'traffic-lights':
        return dispatch(getTrafficLights(map_id));
      case 'sidewalks':
        return dispatch(getSidewalks(map_id));
      case 'sidewalk-obstacles':
        return dispatch(getSidewalkObstacles(map_id));
      case 'bus-stops':
        return dispatch(getBusStops(map_id));
      default:
        break;
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <IconButton
        onClick={() => openModalConfirm()}
        size="small"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
      <DeleteConfirmModal
        open={open}
        setOpen={setOpen}
        confirmDelete={confirmDelete}
      />
    </div>
  );
}
