import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polyline,
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

const position = [51.505, -0.09];
const limeOptions = {
  color: 'black',
  dashArray: '20, 20',
  dashOffset: '0',
};

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
  name: '',
  way: '',
  slope: '',
  paved: null,
  roadCondition: '',
  havePublicTransportation: null,
  notes: '',
  haveVisualAlert: null,
  haveSoundAlert: null,
  haveSoundNotification: null,
  haveFarVisibilityOfTheTrainLine: null,
  surfaceSituation: '',
  bicyclePathType: '',
  bikeRacksCondition: '',
  havePumpTireBomb: null,
  haveFoodToSell: null,
  haveBikeSupportParts: null,
  haveSeats: null,
  accessibleToWheelchair: null,
  haveCrosswalk: null,
  inclination: '',
  surface: '',
  width: '',
  haveContrastedTacticlePaving: null,
  tactilePavingColor: '',
  tacticlePavingSituation: '',
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
  const [mapLayer, setMapLayer] = useState('');
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
  });

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
      });
  };

  const handleCloseAtributesModal = () => {
    setModalSelectAtributeVisible(false);
    setLines([]);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LayersSimbology
          layerCheckbox={layerCheckbox}
          setLayerCheckbox={setLayerCheckbox}
          points={pointsGeom}
        />
        <div style={{ cursor: 'crosshair', display: 'contents' }}>
          <div
            onPointerEnter={forceToggleClassName}
            className="leaflet-container"
          >
            <MapContainer center={position} zoom={13} maxZoom={18}>
              {isAddPointOptionEnabled && (
                <LocationMarkers
                  setCurrentMarker={setCurrentMarker}
                  setModalSelectAtributeVisible={setModalSelectAtributeVisible}
                />
              )}
              <MarkerClusterGroup>
                {Object.keys(pointsGeom).map(key => {
                  const isLayerEnabled = layerCheckbox[key] === true;
                  if (isLayerEnabled)
                    return pointsGeom[key].map(marker => {
                      return (
                        <Marker icon={getIcon(key)} position={marker}>
                          <Popup>{key}</Popup>
                        </Marker>
                      );
                    });
                })}
              </MarkerClusterGroup>

              {isAddLineOptionEnabled && (
                <LocationLines lines={lines} setLines={setLines} />
              )}

              {Object.keys(linesGeom).map(key => {
                return linesGeom[key].map(line => {
                  return (
                    <Polyline pathOptions={limeOptions} positions={line.geom}>
                      <Popup>{key}</Popup>
                    </Polyline>
                  );
                });
              })}

              <Polyline
                pathOptions={limeOptions}
                positions={[lines]}
              ></Polyline>

              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                //url="http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png"
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
