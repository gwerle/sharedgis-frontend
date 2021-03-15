import React from 'react';
import {
  formatSurfaceSituationEnum,
  formatBoolean,
  formatRoadWayEnum,
  formatInclinationEnum,
} from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function RoadsPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Nome: {data.name}</div>
      <div>Sentido da Via: {formatRoadWayEnum(data.way)}</div>
      <div>Inclinação da Via: {formatInclinationEnum(data.slope)}</div>
      <div>Pavimentado: {formatBoolean(data.paved)}</div>
      <div>
        Condição da Via: {formatSurfaceSituationEnum(data.road_condition)}
      </div>
      <div>Tem Transporte Público: {formatBoolean(data.have_bus_lines)}</div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="roads" id={data.id} />
    </div>
  );
}
