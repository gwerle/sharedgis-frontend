export const SAVE_CURRENT_MAP_ID = '@MAP/SAVE_CURRENT_MAP_ID';
export const REMOVE_CURRENT_MAP_ID = '@MAP/REMOVE_CURRENT_MAP_ID';

export interface MapStore {
  currentMapId: number | null;
}

interface SaveCurrentMapId {
  type: typeof SAVE_CURRENT_MAP_ID;
  payload: { mapId: string };
}

interface RemoveCurrentMapId {
  type: typeof REMOVE_CURRENT_MAP_ID;
}

export type MapActions = SaveCurrentMapId | RemoveCurrentMapId;
