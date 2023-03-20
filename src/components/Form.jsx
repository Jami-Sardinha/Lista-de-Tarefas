import { Button, Paper, TextField } from "@mui/material"
import { purple } from "@mui/material/colors";
import React, { useState } from "react"

export default function Form({ addTarefinha }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTarefinha(todoObj);
        document.getElementById("outlined-basic").value = null;
    };

    return (
        <Paper style={{ padding: '1em' }}>
            <div style={{ display:'flex', justifyContent: 'center' }}>
                <TextField id="outlined-basic" label="Adicione as suas tarefinhas" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth />
                <Button sx={{ backgroundColor: purple[800], }} variant="contained" onClick={ () => todoCreate(text)}>
                    Adicionar
                </Button>
            </div>
        </Paper>
    )
}