import React from 'react';
import {
  formatSurfaceSituationEnum,
  formatBoolean,
  formatInclinationEnum,
  formatSurface,
  formatBikeRacksConditionEnum,
} from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function SidewalkPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Cobertura do Terreno: {formatSurface(data.surface)}</div>
      <div>
        Situação do Terreno:{' '}
        {formatSurfaceSituationEnum(data.surface_situation)}
      </div>
      <div>Largura: {formatInclinationEnum(data.width)}m</div>
      <div>
        Possui pavimento tátil: {formatBoolean(data.have_tacticle_paving)}
      </div>
      <div>
        Pavimento tátil com contraste:{' '}
        {formatBoolean(data.have_contrasted_tacticle_paving)}
      </div>
      <div>Cor do pavimento tátil: {data.tacticle_paving_color}</div>

      <div>
        Situação do pavimento tátil:{' '}
        {formatBikeRacksConditionEnum(data.tacticle_paving_situation)}
      </div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="sidewalks" id={data.id} />
    </div>
  );
}
