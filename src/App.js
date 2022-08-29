import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState } from "react";
import "./css/main/App.scss";

function App({ testdata }) {
    const [nState, setNState] = useState(testdata ? testdata : null);

    return (
        <div className="App">
            <Container>
                <h1>Note App</h1>
                <AddNote noteState={nState} setNoteState={setNState} />
                {!nState ? (
                    "No Notes"
                ) : (
                    <ListNotes noteState={nState} setNoteState={setNState} />
                )}
            </Container>
        </div>
    );
}

export default App;
