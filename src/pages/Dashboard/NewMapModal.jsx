import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ShareModal({
  open,
  setOpen,
  mapName,
  setMapName,
  mapDescription,
  setMapDescription,
  confirmCreateMap,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Criar novo mapa</DialogTitle>
        <DialogContent>
          <TextField
            value={mapName}
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Mapa"
            type="email"
            fullWidth
            onChange={event => setMapName(event.currentTarget.value)}
          />
          <TextField
            value={mapDescription}
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="email"
            fullWidth
            onChange={event => setMapDescription(event.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmCreateMap} color="primary">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
