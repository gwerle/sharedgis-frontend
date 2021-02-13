const SET_ACCESSIBILITY_RAMPS = "@POINTS/SET_ACCESSIBILITY_RAMPS";
const SET_TRAIN_CROSS = "@POINTS/SET_TRAIN_CROSS";
const SET_BIKE_PARKS = "@POINTS/SET_BIKE_PARKS";
const SET_BIKE_SUPPORT_POINTS = "@POINTS/SET_BIKE_SUPPORT_POINTS";
const SET_TAXI_STOPS = "@POINTS/SET_TAXI_STOPS";
const SET_TRAFFIC_LIGHTS = "@POINTS/SET_TRAFFIC_LIGHTS";
const SET_SIDEWALK_OBSTACLES = "@POINTS/SET_SIDEWALK_OBSTACLES";
const SET_BUS_STOPS = "@POINTS/SET_BUS_STOPS";

export const setAccessibilityRamps = (data) => ({
  type: SET_ACCESSIBILITY_RAMPS,
  payload: { data }
});

export const setTrainCross = (data) => ({
  type: SET_TRAIN_CROSS,
  payload: { data }
});

export const setBikeParks = (data) => ({
  type: SET_BIKE_PARKS,
  payload: { data }
});

export const setBikeSupportPoints = (data) => ({
  type: SET_BIKE_SUPPORT_POINTS,
  payload: { data }
});

export const setTaxiStops = (data) => ({
  type: SET_TAXI_STOPS,
  payload: { data }
});

export const setTrafficLights = (data) => ({
  type: SET_TRAFFIC_LIGHTS,
  payload: { data }
});

export const setSidewalkObstacles = (data) => ({
  type: SET_SIDEWALK_OBSTACLES,
  payload: { data }
});

export const setBusStops = (data) => ({
  type: SET_BUS_STOPS,
  payload: { data }
});
