import { Container, List } from "@mui/material";
import React, { useState } from "react"
import Form from "../components/Form";
import Item_da_Lista from "../components/Item_da_Lista";

export default function Inicio() {
    const editTarefinha = (id, editedText) => {
        var tudinhoArray = [...tudinho];
        for (var i in tudinhoArray) {
            if(tudinhoArray[i].id == id) {
                tudinhoArray[i].text = editedText
            }
        }
        setTudinho(tudinhoArray);
    }
    const [tudinho, setTudinho] = useState([]);
    const deleteTarefinha = (id) => {
        var filtered = tudinho.filter((tarefinha) => tarefinha.id !== id);
        setTudinho(filtered)
    };

    const addTarefinha = (tarefinha) => {
        setTudinho([...tudinho, tarefinha])
    };

    return (
        <>
        <h1>Tarefinhas</h1>
        <Container maxWidth='xs' style={{ marginTop: '1em' }}>
            <Form addTarefinha={addTarefinha} />
            <List sx={{ marginTop: '1em' }}>
                {tudinho.map((tudinho) => (
                    <div key={tudinho.id} style={{ marginTop: '1em' }}>
                        <Item_da_Lista editTarefinha={editTarefinha} tarefinha={tudinho} deleteTarefinha={deleteTarefinha} />
                    </div>
                ))}
            </List>
        </Container>
        </>
    );
}