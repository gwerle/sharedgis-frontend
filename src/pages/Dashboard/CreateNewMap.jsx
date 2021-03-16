import { Card, CardContent, Icon, Typography } from '@material-ui/core';
import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function CreateNewMap({ handleNewMapClick }) {
  return (
    <Card
      style={{
        minWidth: 275,
        margin: '20px',
        cursor: 'pointer',
        textAlign: 'center',
      }}
      onClick={handleNewMapClick}
    >
      <CardContent style={{}}>
        <AddCircleIcon />
        <Typography>Criar Novo Mapa</Typography>
      </CardContent>
    </Card>
  );
}
