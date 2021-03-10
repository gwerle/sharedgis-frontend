import L from 'leaflet';

import TrafficLight from './svg/TrafficLight.svg';
import BikePark from './svg/BikePark.svg';
import BikeSupportPoint from './svg/BikeSupportPoint.svg';
import BusStop from './svg/BusStop.svg';
import TaxiStop from './svg/TaxiStop.svg';
import TrainCross from './svg/TrainCross.svg';
import AccessibleRamp from './svg/AccessibleRamp.svg';
import SidewalkObstacle from './svg/SidewalkObstacle.svg';

const TrafficLightIcon = new L.Icon({
  iconUrl: TrafficLight,
  iconRetinaUrl: TrafficLight,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const BikeParkIcon = new L.Icon({
  iconUrl: BikePark,
  iconRetinaUrl: BikePark,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const BikeSupportPointIcon = new L.Icon({
  iconUrl: BikeSupportPoint,
  iconRetinaUrl: BikeSupportPoint,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const BusStopIcon = new L.Icon({
  iconUrl: BusStop,
  iconRetinaUrl: BusStop,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const TaxiStopIcon = new L.Icon({
  iconUrl: TaxiStop,
  iconRetinaUrl: TaxiStop,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const TrainCrossIcon = new L.Icon({
  iconUrl: TrainCross,
  iconRetinaUrl: TrainCross,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const AccessibleRampIcon = new L.Icon({
  iconUrl: AccessibleRamp,
  iconRetinaUrl: AccessibleRamp,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const SidewalkObstacleIcon = new L.Icon({
  iconUrl: SidewalkObstacle,
  iconRetinaUrl: SidewalkObstacle,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

export const getIcon = (id) => {
  switch (id) {
    case 'accessibilityRamps':
      return AccessibleRampIcon;
    case 'trainCross':
      return TrainCrossIcon;
    case 'bikeParks':
      return BikeParkIcon;
    case 'bikeSupportPoints':
      return BikeSupportPointIcon;
    case 'taxiStops':
      return TaxiStopIcon;
    case 'trafficLights':
      return TrafficLightIcon;
    case 'sidewalkObstacles':
      return SidewalkObstacleIcon;
    case 'busStops':
      return BusStopIcon;
    default:
      return BusStopIcon;
  }
}
