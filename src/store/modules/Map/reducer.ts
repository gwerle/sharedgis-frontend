import { MapStore, MapActions } from './types';

const initialState: MapStore = {
  currentMapId: null,
};

export default function mapReducer(state = initialState, action: MapActions) {
  switch (action.type) {
    case '@MAP/SAVE_CURRENT_MAP_ID':
      return {
        ...state,
        currentMapId: action.payload.mapId,
      };
    case '@MAP/REMOVE_CURRENT_MAP_ID':
      return {
        ...state,
        currentMapId: null,
      };
    default:
      return state;
  }
}
