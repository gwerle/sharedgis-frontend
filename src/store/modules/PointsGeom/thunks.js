
import * as restPoints from "../../../services/PointsGeomService";
import * as actions from './actions'

export const getAccessibilityRamps = (map_id) => {
  return dispatch => {
    restPoints.getAccessibilityRamps(map_id).then(resp => {
      dispatch(actions.setAccessibilityRamps(resp.data));
    });
  };
};

export const getTrainCross = (map_id) => {
  return dispatch => {
    restPoints.getTrainCross(map_id).then(resp => {
      dispatch(actions.setTrainCross(resp.data));
    });
  };
};

export const getBikeParks = (map_id) => {
  return dispatch => {
    restPoints.getBikeParks(map_id).then(resp => {
      dispatch(actions.setBikeParks(resp.data));
    });
  };
};

export const getBikeSupportPoints = (map_id) => {
  return dispatch => {
    restPoints.getBikeSupportPoints(map_id).then(resp => {
      dispatch(actions.setBikeSupportPoints(resp.data));
    });
  };
};

export const getTaxiStops = (map_id) => {
  return dispatch => {
    restPoints.getTaxiStops(map_id).then(resp => {
      dispatch(actions.setTaxiStops(resp.data));
    });
  };
};

export const getTrafficLights = (map_id) => {
  return dispatch => {
    restPoints.getTrafficLights(map_id).then(resp => {
      dispatch(actions.setTrafficLights(resp.data));
    });
  };
};

export const getSidewalkObstacles = (map_id) => {
  return dispatch => {
    restPoints.getSidewalkObstacles(map_id).then(resp => {
      dispatch(actions.setSidewalkObstacles(resp.data));
    });
  };
};

export const getBusStops = (map_id) => {
  return dispatch => {
    restPoints.getBusStops(map_id).then(resp => {
      dispatch(actions.setBusStops(resp.data));
    });
  };
};
