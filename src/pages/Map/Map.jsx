import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polyline,
  useMap,
} from 'react-leaflet';
import RoomIcon from '@material-ui/icons/Room';
import TimelineIcon from '@material-ui/icons/Timeline';
import api from '../../services/api';
import SelectAtributesModal from './SelectAtributesModal';
import { useDispatch, useSelector } from '../../store';
import {
  getAccessibilityRamps,
  getTrainCross,
  getTrafficLights,
  getSidewalkObstacles,
  getBusStops,
  getBikeParks,
  getBikeSupportPoints,
  getTaxiStops,
} from '../../store/modules/PointsGeom/thunks';
import {
  getRoads,
  getTrains,
  getBicyclePaths,
  getSidewalks,
} from '../../store/modules/LinesGeom/thunks';
import { mapLayers } from '../../config/constants';
import { getIcon } from '../../icons/Points';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import LayersSimbology from './LayersSimbology';
import AcessibilityRampPopup from './MarkerPopups/AcessibilityRampPopup';
import BikeParkPopup from './MarkerPopups/BikeParkPopup';
import BikeSupportPointPopup from './MarkerPopups/BikeSupportPointPopup';
import CrosswalkObstaclePopup from './MarkerPopups/CrosswalkObstaclePopup';
import BusStopPopup from './MarkerPopups/BusStopPopup';
import TrainCrossPopup from './MarkerPopups/TrainCrossPopup';
import TrafficLightPopup from './MarkerPopups/TrafficLightPopup';
import TaxiStopPopup from './MarkerPopups/TaxiStopPopup';
import { getLineIcon } from '../../icons/Lines';
import BicyclePathPopup from './MarkerPopups/BicyclePathPopup';
import RoadsPopup from './MarkerPopups/RoadsPopup';
import SidewalkPopup from './MarkerPopups/SidewalkPopup';
import TrainLinePopup from './MarkerPopups/TrainLinePopup';

const position = [-15.81, -47.9];

function LocationMarkers({ setCurrentMarker, setModalSelectAtributeVisible }) {
  useMapEvents({
    click(e) {
      setModalSelectAtributeVisible(true);
      setCurrentMarker({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return null;
}

function LocationLines({ lines, setLines }) {
  const [, , mapId] = window.location.pathname.split('/');

  useMapEvents({
    click(e) {
      const currLines = lines;
      const newLine = [e.latlng.lat, e.latlng.lng];
      const withNewLine = currLines.concat([newLine]);

      setLines(withNewLine);
    },
  });

  return null;
}

const formValuesInitialValues = {
  name: null,
  way: null,
  slope: null,
  paved: null,
  roadCondition: null,
  havePublicTransportation: null,
  notes: '',
  haveVisualAlert: null,
  haveSoundAlert: null,
  haveSoundNotification: null,
  haveFarVisibilityOfTheTrainLine: null,
  surfaceSituation: null,
  bicyclePathType: null,
  bikeRacksCondition: null,
  havePumpTireBomb: null,
  haveFoodToSell: null,
  haveBikeSupportParts: null,
  haveSeats: null,
  accessibleToWheelchair: null,
  haveCrosswalk: null,
  inclination: null,
  surface: null,
  width: null,
  haveContrastedTacticlePaving: null,
  tacticlePavingColor: null,
  tacticlePavingSituation: null,
  rainCovered: null,
  haveBusLinesDemonstrations: null,
};

export default function Map() {
  const [isAddPointOptionEnabled, setAddPointOptionEnabled] = useState(false);
  const [isAddLineOptionEnabled, setAddLineOptionEnabled] = useState(false);

  const [lines, setLines] = useState([]);
  const [
    isModalSelectAtributeVisible,
    setModalSelectAtributeVisible,
  ] = useState(false);
  const [currentMarker, setCurrentMarker] = useState({});
  const [formValues, setFormValues] = useState(formValuesInitialValues);
  const [mapLayer, setMapLayer] = useState(null);
  const dispatch = useDispatch();
  const pointsGeom = useSelector(state => state.pointsGeom);
  const linesGeom = useSelector(state => state.linesGeom);
  const [layerCheckbox, setLayerCheckbox] = React.useState({
    accessibilityRamps: true,
    trainCross: true,
    bikeParks: true,
    bikeSupportPoints: true,
    taxiStops: true,
    trafficLights: true,
    sidewalkObstacles: true,
    busStops: true,
    roads: true,
    sidewalks: true,
    trains: true,
    bicyclePaths: true,
  });
  const [userLocated, setUserLocated] = React.useState(false);

  React.useEffect(() => {
    mapLayers.forEach(item => getGeomByLayer(item.id));
  }, []);

  const getGeomByLayer = layer => {
    const [, , map_id] = window.location.pathname.split('/');

    switch (layer) {
      case 'accessibility-ramps':
        return dispatch(getAccessibilityRamps(map_id));
      case 'roads':
        return dispatch(getRoads(map_id));
      case 'trains':
        return dispatch(getTrains(map_id));
      case 'train-cross':
        return dispatch(getTrainCross(map_id));
      case 'bicycle-paths':
        return dispatch(getBicyclePaths(map_id));
      case 'bike-parks':
        return dispatch(getBikeParks(map_id));
      case 'bike-support-points':
        return dispatch(getBikeSupportPoints(map_id));
      case 'taxi-stops':
        return dispatch(getTaxiStops(map_id));
      case 'traffic-lights':
        return dispatch(getTrafficLights(map_id));
      case 'sidewalks':
        return dispatch(getSidewalks(map_id));
      case 'sidewalk-obstacles':
        return dispatch(getSidewalkObstacles(map_id));
      case 'bus-stops':
        return dispatch(getBusStops(map_id));
      default:
        break;
    }
  };

  const toggleAddPointOption = () => {
    setAddPointOptionEnabled(!isAddPointOptionEnabled);
    setAddLineOptionEnabled(false);
  };

  const toggleAddLineOption = () => {
    setAddLineOptionEnabled(!isAddLineOptionEnabled);
    setAddPointOptionEnabled(false);
    if (isAddLineOptionEnabled) {
      setModalSelectAtributeVisible(true);
    }
  };

  const forceToggleClassName = e => {
    if (isAddPointOptionEnabled || isAddLineOptionEnabled) {
      e.target.classList.add('leaflet-crosshair');
    } else {
      e.target.classList.remove('leaflet-crosshair');
    }
  };

  const handleSubmitForm = () => {
    const [, , map_id] = window.location.pathname.split('/');

    api
      .post(mapLayer, {
        map_id,
        ...formValues,
        ...(isAddPointOptionEnabled && currentMarker),
        linestring: lines.length ? [...lines] : null,
      })
      .then(() => getGeomByLayer(mapLayer))
      .finally(() => {
        setModalSelectAtributeVisible(false);
        setFormValues(formValuesInitialValues);
        setMapLayer('');
        setLines([]);
      });
  };

  const handleCloseAtributesModal = () => {
    setModalSelectAtributeVisible(false);
    setLines([]);
    setAddLineOptionEnabled(false);
    setAddPointOptionEnabled(false);
  };

  const getPopUpComponent = (id, data) => {
    switch (id) {
      case 'accessibilityRamps':
        return <AcessibilityRampPopup data={data} />;
      case 'trainCross':
        return <TrainCrossPopup data={data} />;
      case 'bikeParks':
        return <BikeParkPopup data={data} />;
      case 'bikeSupportPoints':
        return <BikeSupportPointPopup data={data} />;
      case 'taxiStops':
        return <TaxiStopPopup data={data} />;
      case 'trafficLights':
        return <TrafficLightPopup data={data} />;
      case 'sidewalkObstacles':
        return <CrosswalkObstaclePopup data={data} />;
      case 'busStops':
        return <BusStopPopup data={data} />;
      case 'bicyclePaths':
        return <BicyclePathPopup data={data} />;
      case 'roads':
        return <RoadsPopup data={data} />;
      case 'sidewalks':
        return <SidewalkPopup data={data} />;
      case 'trains':
        return <TrainLinePopup data={data} />;
      default:
        return <BusStopPopup data={data} />;
    }
  };

  function ZoomToLocation() {
    const map = useMap();

    React.useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setUserLocated(true);
        map.flyTo(e.latlng, 14);
      });
    }, []);

    return null;
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LayersSimbology
          layerCheckbox={layerCheckbox}
          setLayerCheckbox={setLayerCheckbox}
          points={pointsGeom}
          lines={linesGeom}
        />
        <div style={{ cursor: 'crosshair', display: 'contents' }}>
          <div
            onPointerEnter={forceToggleClassName}
            className="leaflet-container"
          >
            <MapContainer center={position} zoom={4} maxZoom={18}>
              {isAddPointOptionEnabled && (
                <LocationMarkers
                  setCurrentMarker={setCurrentMarker}
                  setModalSelectAtributeVisible={setModalSelectAtributeVisible}
                />
              )}
              {!userLocated && <ZoomToLocation />}
              <MarkerClusterGroup>
                {Object.keys(pointsGeom).map(key => {
                  const isLayerEnabled = layerCheckbox[key];
                  if (isLayerEnabled)
                    return pointsGeom[key].map(marker => {
                      return (
                        <Marker icon={getIcon(key)} position={marker}>
                          <Popup>{getPopUpComponent(key, marker)}</Popup>
                        </Marker>
                      );
                    });
                })}
              </MarkerClusterGroup>

              {isAddLineOptionEnabled && (
                <LocationLines lines={lines} setLines={setLines} />
              )}

              {Object.keys(linesGeom).map(key => {
                const isLayerEnabled = layerCheckbox[key];
                if (isLayerEnabled)
                  return linesGeom[key].map(line => {
                    return (
                      <Polyline
                        pathOptions={getLineIcon(key)}
                        positions={line.geom}
                      >
                        <Popup>{getPopUpComponent(key, line)}</Popup>
                      </Polyline>
                    );
                  });
              })}

              <Polyline
                pathOptions={getLineIcon('newLine')}
                positions={[lines]}
              ></Polyline>

              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="leaflet-right leaflet-top">
            <div className="leaflet-control leaflet-bar leaflet-control-zoom">
              <a
                className="leaflet-control-zoom-in"
                title="Adicionar Ponto"
                style={{
                  backgroundColor: isAddPointOptionEnabled
                    ? 'rgb(49,55,55, 0.8)'
                    : 'rgb(49,55,55)',
                  color: '#FFF',
                  cursor: 'pointer',
                  height: '36px',
                  width: '36px',
                }}
                onClick={() => toggleAddPointOption()}
              >
                <RoomIcon style={{ fontSize: '1.5rem', marginTop: '4px' }} />
              </a>
              <a
                className="leaflet-control-zoom-in"
                title="Adicionar Linha"
                style={{
                  backgroundColor: isAddLineOptionEnabled
                    ? 'rgb(49,55,55, 0.8)'
                    : 'rgb(49,55,55)',
                  color: '#FFF',
                  cursor: 'pointer',
                  height: '36px',
                  width: '36px',
                }}
                onClick={() => toggleAddLineOption()}
              >
                <TimelineIcon
                  style={{ fontSize: '1.5rem', marginTop: '4px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SelectAtributesModal
        isOpen={isModalSelectAtributeVisible}
        setOpen={setModalSelectAtributeVisible}
        handleSubmitForm={handleSubmitForm}
        formValues={formValues}
        setFormValues={setFormValues}
        mapLayer={mapLayer}
        setMapLayer={setMapLayer}
        spacialFeatureType={isAddPointOptionEnabled ? 'point' : 'line'}
        handleCloseAtributesModal={handleCloseAtributesModal}
      />
    </div>
  );
}
