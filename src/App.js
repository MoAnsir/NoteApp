import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/main/App.scss";
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals(console.log);

// function App() {
//     let testdata = [
//         {
//             id: uuidv4(),
//             desc: "test 1 ",
//             content: "text content 1",
//             tags: "work, p1",
//         },
//         {
//             id: uuidv4(),
//             desc: "test 2",
//             content: "text content 2",
//             tags: "work, p1",
//         },
//     ];

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
