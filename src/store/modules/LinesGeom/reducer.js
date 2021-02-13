const initialState = {
  roads: [],
  trains: [],
  bicyclePaths: [],
  sidewalks: []
};

export default function linesGeomReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case '@LINES/SET_ROADS':
      return {
        ...state,
        roads: action.payload.data
      };
    case '@LINES/SET_TRAINS':
      return {
        ...state,
        trains: action.payload.data
      };
    case '@LINES/SET_BICYCLE_PATHS':
      return {
        ...state,
        bicyclePaths: action.payload.data
      };
    case '@LINES/SET_SIDEWALKS':
      return {
        ...state,
        sidewalks: action.payload.data
      };
    default:
      return state;
  }
}
