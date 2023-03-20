import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import Editando from './Editando';
import { blue, orange } from '@mui/material/colors';

export default function Item_da_Lista({ tarefinha, deleteTarefinha, editTarefinha}) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const dialogHandler = () => {
        setOpenDialog(!openDialog);
    };

  return (
    <>
    <Editando editTarefinha={editTarefinha} open={openDialog} dialogHandler={dialogHandler} tarefinha={tarefinha} />
    <Paper style={{ padding: '0.5em 0em' }}>
    <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="excluir" onClick={() => deleteTarefinha(tarefinha.id)}>
                <DeleteIcon />
            </IconButton>
        }
        disablePadding
    >
        <ListItemButton role={undefined}  dense>
            <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple sx={{ color: blue[800], '&.Mui-checked': { color: blue[600], }, }} />
                <Checkbox edge="start" tabIndex={-1} disableRipple sx={{ color: orange[800], '&.Mui-checked': { color: orange[600], }, }} />
            </ListItemIcon>
            <ListItemText primary={tarefinha.text} onClick={() => setOpenDialog(true)} />
        </ListItemButton>
    </ListItem>
    </Paper>
    </>
  );
}