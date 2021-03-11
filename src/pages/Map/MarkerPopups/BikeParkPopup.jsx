import React from 'react';
import { formatBikeRacksConditionEnum } from '../../../utils/enumUtils';

export default function BikeParkPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>
        Condição dos bicicletários:{' '}
        {formatBikeRacksConditionEnum(data.bike_racks_conditions)}
      </div>
      <div>Observações: {data.notes}</div>
    </div>
  );
}
