const SET_ROADS = "@LINES/SET_ROADS";
const SET_TRAINS = "@LINES/SET_TRAINS";
const SET_BICYCLE_PATHS = "@LINES/SET_BICYCLE_PATHS";
const SET_SIDEWALKS = "@LINES/SET_SIDEWALKS";

export const setRoads = (data) => ({
  type: SET_ROADS,
  payload: { data }
});

export const setTrains = (data) => ({
  type: SET_TRAINS,
  payload: { data }
});

export const setBicyclePaths = (data) => ({
  type: SET_BICYCLE_PATHS,
  payload: { data }
});

export const setSidewalks = (data) => ({
  type: SET_SIDEWALKS,
  payload: { data }
});
