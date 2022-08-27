import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./css/main/App.scss";

import reportWebVitals from "./reportWebVitals";
reportWebVitals(console.log);

function App() {
    return (
        <div className="App">
            <Container>
                <h1>Note App</h1>
                <AddNote />
                <ListNotes />
            </Container>
        </div>
    );
}

export default App;
