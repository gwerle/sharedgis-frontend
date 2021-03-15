import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ShareModal({
  open,
  setOpen,
  emailValue,
  setEmailValue,
  confirmShare,
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
        <DialogTitle id="form-dialog-title">Compartilhar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao compartilhar o seu mapa com alguém, a pessoa poderá criar e
            excluir novos pontos desse mapa.
          </DialogContentText>
          <TextField
            value={emailValue}
            autoFocus
            margin="dense"
            id="name"
            label="Endereço de Email"
            type="email"
            fullWidth
            onChange={event => setEmailValue(event.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmShare} color="primary">
            Compartilhar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
