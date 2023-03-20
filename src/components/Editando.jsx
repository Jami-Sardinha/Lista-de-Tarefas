import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function Editando({open, dialogHandler, tarefinha, editTarefinha }) {
  const [editedText, setEditedText] = React.useState(tarefinha.text);

  const textHandler = () => {
    editTarefinha(tarefinha.id, editedText)
    dialogHandler();
  }

  return (
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Editar Tarefinha"}
        </DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={ (e) => setEditedText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Voltar</Button>
          <Button onClick={textHandler} autoFocus>Confirmar</Button>
        </DialogActions>
      </Dialog>
  );
}