import React from 'react';
import { formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function BusStopPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Acessível para cadeirantes:{' '}
        {formatBoolean(data.accessible_to_wheelchair)}
      </div>
      <div>
        Possui notificação visual:{' '}
        {formatBoolean(data.have_visual_notification)}
      </div>
      <div>
        Possui notificação sonora: {formatBoolean(data.have_sound_notification)}
      </div>
      <div>
        Possui cobertura contra chuva: {formatBoolean(data.rain_covered)}
      </div>
      <div>
        Possui indicação de linhas de ônibus:{' '}
        {formatBoolean(data.have_bus_lines_demonstrations)}
      </div>
      <div>Possui bancos/cadeiras: {formatBoolean(data.have_seats)}</div>

      <div>Observações: {data.notes}</div>
      <DeleteComponent url="bus-stops" id={data.id} />
    </div>
  );
}
