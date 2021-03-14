import React from 'react';
import { formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function BikeSupportPointPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Possui bancos/cadeiras: {formatBoolean(data.have_seats)}</div>
      <div>
        Possui notificação visual:{' '}
        {formatBoolean(data.have_visual_notification)}
      </div>
      <div>
        Possui notificação sonora: {formatBoolean(data.have_sound_notification)}
      </div>
      <div>
        Acessível para cadeirantes:{' '}
        {formatBoolean(data.accessible_to_wheelchair)}
      </div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="bike-support-points" id={data.id} />
    </div>
  );
}
