import L from 'leaflet';

import TrafficLight from './svg/TrafficLight.svg';
import BikePark from './svg/BikePark.svg';
import BikeSupportPoint from './svg/BikeSupportPoint.svg';
import BusStop from './svg/BusStop.svg';
import TaxiStop from './svg/TaxiStop.svg';
import TrainCross from './svg/TrainCross.svg';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

export const TrafficLightIcon = new L.Icon({
  iconUrl: TrafficLight,
  iconRetinaUrl: TrafficLight,
  popupAnchor: [-0, -0],
  iconSize: [22, 35],
});

export const BikeParkIcon = new L.Icon({
  iconUrl: BikePark,
  iconRetinaUrl: BikePark,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

export const BikeSupportPointIcon = new L.Icon({
  iconUrl: BikeSupportPoint,
  iconRetinaUrl: BikeSupportPoint,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

export const BusStopIcon = new L.Icon({
  iconUrl: BusStop,
  iconRetinaUrl: BusStop,
  popupAnchor: [-0, -0],
  iconSize: [22, 35],
});

export const TaxiStopIcon = new L.Icon({
  iconUrl: TaxiStop,
  iconRetinaUrl: TaxiStop,
  popupAnchor: [-0, -0],
  iconSize: [22, 25],
});

export const TrainCrossIcon = new L.Icon({
  iconUrl: TrainCross,
  iconRetinaUrl: TrainCross,
  popupAnchor: [-0, -0],
  iconSize: [22, 22],
});

export const AccessibleRampIcon = new L.Icon({
  iconUrl: AccessibleForwardIcon,
  iconRetinaUrl: AccessibleForwardIcon,
  popupAnchor: [-0, -0],
  iconSize: [22, 22],
});

export const SidewalkObstacleIcon = new L.Icon({
  iconUrl: DirectionsWalkIcon,
  iconRetinaUrl: DirectionsWalkIcon,
  popupAnchor: [-0, -0],
  iconSize: [22, 22],
});
