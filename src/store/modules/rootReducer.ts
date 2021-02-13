import { combineReducers } from 'redux';
import snackbarReducer from './Snackbar/reducer';
import mapReducer from './Map/reducer';
import pointsGeomReducer from './PointsGeom/reducer';
import linesGeomReducer from './LinesGeom/reducer';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  map: mapReducer,
  pointsGeom: pointsGeomReducer,
  linesGeom: linesGeomReducer,
});

export default rootReducer;
