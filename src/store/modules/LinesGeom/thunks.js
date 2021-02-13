
import * as restLines from "../../../services/LineGeomService";
import * as actions from './actions'

export const getRoads = (map_id) => {
  return dispatch => {
    restLines.getRoads(map_id).then(resp => {
      dispatch(actions.setRoads(resp.data));
    });
  };
};

export const getTrains = (map_id) => {
  return dispatch => {
    restLines.getTrains(map_id).then(resp => {
      dispatch(actions.setTrains(resp.data));
    });
  };
};

export const getBicyclePaths = (map_id) => {
  return dispatch => {
    restLines.getBicyclePaths(map_id).then(resp => {
      dispatch(actions.setBicyclePaths(resp.data));
    });
  };
};

export const getSidewalks = (map_id) => {
  return dispatch => {
    restLines.getSidewalks(map_id).then(resp => {
      dispatch(actions.setSidewalks(resp.data));
    });
  };
};
