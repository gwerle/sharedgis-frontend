import React from 'react';
import {
  formatSurfaceSituationEnum,
  formatByciclePathTypeEnum,
} from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function BicyclePathPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Situação da Ciclovia:{' '}
        {formatSurfaceSituationEnum(data.surface_situation)}
      </div>
      <div>
        Tipo de Ciclovia: {formatByciclePathTypeEnum(data.bicycle_path_type)}
      </div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="bycicle-paths" id={data.id} />
    </div>
  );
}
