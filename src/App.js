import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./css/main/App.scss";

import reportWebVitals from "./reportWebVitals";
reportWebVitals(console.log);

// function App() {
//     let testdata = [
//         {
//             id: 1,
//             desc: "test1 ",
//             content: "text content 1",
//             tags: "work, p1",
//         },
//         {
//             id: 2,
//             desc: "test 2",
//             content: "text content 2",
//             tags: "work, p1",
//         },
//     ];
function App({ testdata }) {
    const [state, setState] = useState(testdata ? testdata : null);

    return (
        <div className="App">
            <Container>
                <h1>Note App</h1>
                <AddNote />
                {!state ? (
                    "No Notes"
                ) : (
                    <ListNotes noteState={state} setNoteState={setState} />
                )}
            </Container>
        </div>
    );
}

export default App;
