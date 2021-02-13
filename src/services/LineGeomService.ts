import api from './api';

export function getRoads(map_id: string) {
  return api.get(`/roads?map_id=${map_id}`);
}

export function getTrains(map_id: string) {
  return api.get(`/trains?map_id=${map_id}`);
}

export function getBicyclePaths(map_id: string) {
  return api.get(`/bicycle-paths?map_id=${map_id}`);
}

export function getSidewalks(map_id: string) {
  return api.get(`/sidewalks?map_id=${map_id}`);
}
