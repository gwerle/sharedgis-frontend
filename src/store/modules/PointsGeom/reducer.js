const initialState = {
  accessibilityRamps: [],
  trainCross: [],
  bikeParks: [],
  bikeSupportPoints: [],
  taxiStops: [],
  trafficLights: [],
  sidewalkObstacles: [],
  busStops: []
};

export default function pointsGeomReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case '@POINTS/SET_ACCESSIBILITY_RAMPS':
      return {
        ...state,
        accessibilityRamps: action.payload.data
      };
      case '@POINTS/SET_TRAIN_CROSS':
        return {
          ...state,
          trainCross: action.payload.data
        };
      case '@POINTS/SET_BIKE_PARKS':
        return {
          ...state,
          bikeParks: action.payload.data
        };
      case '@POINTS/SET_BIKE_SUPPORT_POINTS':
        return {
          ...state,
          bikeSupportPoints: action.payload.data
        };
      case '@POINTS/SET_TAXI_STOPS':
        return {
          ...state,
          taxiStops: action.payload.data
        };
      case '@POINTS/SET_TRAFFIC_LIGHTS':
        return {
          ...state,
          trafficLights: action.payload.data
        };
      case '@POINTS/SET_SIDEWALK_OBSTACLES':
        return {
          ...state,
          sidewalkObstacles: action.payload.data
        };
      case '@POINTS/SET_BUS_STOPS':
        return {
          ...state,
          busStops: action.payload.data
        };
    default:
      return state;
  }
}
