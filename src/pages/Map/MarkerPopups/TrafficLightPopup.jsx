import React from 'react';
import { formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function BikeSupportPointPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Possui notificação sonora: {formatBoolean(data.have_sound_notification)}
      </div>
      <div>Possui faixa de pedestre: {formatBoolean(data.have_crosswalk)}</div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="traffic-lights" id={data.id} />
    </div>
  );
}
