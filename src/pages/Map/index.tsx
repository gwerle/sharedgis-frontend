import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import RoomIcon from '@material-ui/icons/Room';
import api from '../../services/api';

const position = [51.505, -0.09];

function LocationMarkers({ markers, setMarkers }: any) {
  const [, , mapId] = window.location.pathname.split('/');

  useMapEvents({
    click(e) {
      const currMarkers = markers;
      const withNewMarker = currMarkers.concat(e.latlng);
      api.post('/accessibility-ramps', {
        map_id: mapId,
        haveVisionNotification: false,
        inclination: 'HIGH',
        lat: e.latlng.lat,
        long: e.latlng.lng,
      });
      setMarkers(withNewMarker);
    },
  });

  return null;
}

export default function Map() {
  const [isAddPointOptionEnabled, setAddPointOptionEnabled] = useState(false);
  const [markers, setMarkers] = useState([]);

  const toggleAddPointOption = () => {
    setAddPointOptionEnabled(!isAddPointOptionEnabled);
  };

  useEffect(() => {
    const [, , map_id] = window.location.pathname.split('/');
    api
      .get('/accessibility-ramps', {
        params: { map_id },
      })
      .then(response => {
        setMarkers(response.data);
      });
  }, []);

  const forceToggleClassName = (e: any) => {
    if (isAddPointOptionEnabled) {
      e.target.classList.add('leaflet-crosshair');
    } else {
      e.target.classList.remove('leaflet-crosshair');
    }
  };

  return (
    <div style={{ cursor: 'crosshair' }}>
      <div onPointerEnter={forceToggleClassName} className="leaflet-container">
        <MapContainer center={position as any} zoom={13}>
          {isAddPointOptionEnabled && (
            <LocationMarkers markers={markers} setMarkers={setMarkers} />
          )}
          {markers.map((marker: any) => {
            return (
              <Marker position={marker}>
                <Popup>{marker.id || null}</Popup>
              </Marker>
            );
          })}
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
        </div>
      </div>
    </div>
  );
}
