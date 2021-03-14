import api from './api';

export function getAccessibilityRamps(map_id: string) {
  return api.get(`/accessibility-ramps?map_id=${map_id}`);
}

export function getTrainCross(map_id: string) {
  return api.get(`/train-cross?map_id=${map_id}`);
}

export function getBikeParks(map_id: string) {
  return api.get(`/bike-parks?map_id=${map_id}`);
}

export function getBikeSupportPoints(map_id: string) {
  return api.get(`/bike-support-points?map_id=${map_id}`);
}

export function getTaxiStops(map_id: string) {
  return api.get(`/taxi-stops?map_id=${map_id}`);
}

export function getTrafficLights(map_id: string) {
  return api.get(`/traffic-lights?map_id=${map_id}`);
}

export function getSidewalkObstacles(map_id: string) {
  return api.get(`/sidewalk-obstacles?map_id=${map_id}`);
}

export function getBusStops(map_id: string) {
  return api.get(`/bus-stops?map_id=${map_id}`);
}

export function deleteItem(url: string, id: number) {
  return api.delete(`${url}/${id}`);
}
