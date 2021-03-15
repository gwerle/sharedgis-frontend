import React from 'react';
import { FormControlLabel, FormControl, Checkbox } from '@material-ui/core';
import AccessibleRampIcon from '../../icons/Points/components/AccessibleRamp';
import TrainCrossIcon from '../../icons/Points/components/TrainCross';
import BikeParkIcon from '../../icons/Points/components/BikePark';
import BikeSupportPointIcon from '../../icons/Points/components/BikeSupportPoint';
import SidewalkObstacleIcon from '../../icons/Points/components/SidewalkObstacle';
import TrafficLightIcon from '../../icons/Points/components/TrafficLight';
import BusStopIcon from '../../icons/Points/components/BusStop';
import TaxiStopIcon from '../../icons/Points/components/TaxiStop';
import BicyclePathIcon from '../../icons/Lines/components/BicyclePath';
import TrainLineIcon from '../../icons/Lines/components/TrainLine';
import SidewalkIcon from '../../icons/Lines/components/Sidewalk';
import RoadsIcon from '../../icons/Lines/components/Roads';

export default function LayersSimbology({
  points,
  lines,
  layerCheckbox,
  setLayerCheckbox,
}) {
  const getLayerName = id => {
    switch (id) {
      case 'accessibilityRamps':
        return 'Rampas de Acessibilidade';
      case 'trainCross':
        return 'Cruzamento Férreo';
      case 'bikeParks':
        return 'Estacionamento de Bicicletas';
      case 'bikeSupportPoints':
        return 'Pontos de apoio ao ciclista';
      case 'taxiStops':
        return 'Paradas de Táxi';
      case 'trafficLights':
        return 'Semáforos';
      case 'sidewalkObstacles':
        return 'Obstáculos na Calçada';
      case 'busStops':
        return 'Paradas de Ônibus';
      case 'roads':
        return 'Vias';
      case 'sidewalks':
        return 'Calçadas';
      case 'trains':
        return 'Via Férrea';
      case 'bicyclePaths':
        return 'Ciclovias';

      default:
        return '';
    }
  };

  const handleChange = event => {
    setLayerCheckbox({
      ...layerCheckbox,
      [event.target.name]: event.target.checked,
    });
  };

  const getSmallIcon = id => {
    switch (id) {
      case 'accessibilityRamps':
        return <AccessibleRampIcon height="24" width="24" />;
      case 'trainCross':
        return <TrainCrossIcon height="24" width="24" />;
      case 'bikeParks':
        return <BikeParkIcon height="24" width="24" />;
      case 'bikeSupportPoints':
        return <BikeSupportPointIcon height="24" width="24" />;
      case 'taxiStops':
        return <TaxiStopIcon height="24" width="24" />;
      case 'trafficLights':
        return <TrafficLightIcon height="24" width="24" />;
      case 'sidewalkObstacles':
        return <SidewalkObstacleIcon height="24" width="24" />;
      case 'busStops':
        return <BusStopIcon height="24" width="24" />;
      case 'roads':
        return <RoadsIcon height="24" width="24" />;
      case 'sidewalks':
        return <SidewalkIcon height="24" width="24" />;
      case 'trains':
        return <TrainLineIcon height="24" width="24" />;
      case 'bicyclePaths':
        return <BicyclePathIcon height="24" width="24" />;
      default:
        break;
    }
  };

  return (
    <div style={{ margin: '20px 0 20px 20px' }}>
      <FormControl>
        {Object.keys(points).map(layer => {
          return (
            <FormControlLabel
              control={
                <>
                  <Checkbox
                    checked={layerCheckbox[layer]}
                    onChange={handleChange}
                    name={layer}
                    color="primary"
                  />
                  <span style={{ marginRight: '7px' }}>
                    {getSmallIcon(layer)}
                  </span>
                </>
              }
              label={getLayerName(layer)}
            />
          );
        })}
        {Object.keys(lines).map(layer => {
          return (
            <FormControlLabel
              control={
                <>
                  <Checkbox
                    checked={layerCheckbox[layer]}
                    onChange={handleChange}
                    name={layer}
                    color="primary"
                  />
                  <span style={{ marginRight: '7px' }}>
                    {getSmallIcon(layer)}
                  </span>
                </>
              }
              label={getLayerName(layer)}
            />
          );
        })}
      </FormControl>
    </div>
  );
}
