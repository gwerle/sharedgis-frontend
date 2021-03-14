import React from 'react';
import { formatInclinationEnum, formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function AcessibilityRampPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Possui Notificação Visual:{' '}
        {formatBoolean(data.have_visual_notification)}
      </div>
      <div>Inclinação: {formatInclinationEnum(data.inclination)}</div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="accessibility-ramps" id={data.id} />
    </div>
  );
}
