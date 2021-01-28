import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import RoomIcon from '@material-ui/icons/Room';

const position = [51.505, -0.09];

function LocationMarkers({ markers, setMarkers }: any) {
  const map = useMapEvents({
    click(e) {
      const currMarkers = markers;
      const withNewMarker = currMarkers.concat(e.latlng);
      setMarkers(withNewMarker);
      map.locate();
    },
  });

  return null;
}

export default function Map() {
  const [isAddPointOptionEnabled, setAddPointOptionEnabled] = useState(false);
  const [markers, setMarkers] = useState([]) as any;

  const toggleAddPointOption = () => {
    setAddPointOptionEnabled(!isAddPointOptionEnabled);
  };

  return (
    <div>
      <div className="leaflet-container ">
        <MapContainer
          style={{ cursor: 'crosshair' }}
          center={position as any}
          zoom={13}
          scrollWheelZoom={false}
        >
          {isAddPointOptionEnabled && (
            <LocationMarkers markers={markers} setMarkers={setMarkers} />
          )}
          {markers.map((marker: any) => {
            return (
              <Marker position={marker}>
                <Popup>Você clicou aqui</Popup>
              </Marker>
            );
          })}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position as any}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
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
