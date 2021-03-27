import React from 'react';
import { formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function BikeSupportPointPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Possui bomba para encher pneu: {formatBoolean(data.have_pump_tire_bomb)}
      </div>
      <div>
        Possui comida para vender: {formatBoolean(data.have_food_to_sell)}
      </div>
      <div>
        Possui peças de reposição de bicicleta:{' '}
        {formatBoolean(data.have_bike_support_parts)}
      </div>

      <div>Observações: {data.notes}</div>
      <DeleteComponent url="bike-support-points" id={data.id} />
    </div>
  );
}
