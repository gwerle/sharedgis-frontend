import { MapActions } from './types';
import { REMOVE_CURRENT_MAP_ID, SAVE_CURRENT_MAP_ID } from './types';

export const saveCurrentMapId = (mapId: string): MapActions => ({
  type: SAVE_CURRENT_MAP_ID,
  payload: { mapId },
});

export const removeCurrentMapId = (): MapActions => ({
  type: REMOVE_CURRENT_MAP_ID,
});
