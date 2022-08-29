import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState } from "react";
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

// Need to fix add issue with the prev. when yo first load there are no notes so you need to add to an empty state.
// no prev in the setState because there is no prev, it is the first occurrence.

function App({ testdata }) {
    const [state, setState] = useState(testdata ? testdata : null);

    return (
        <div className="App">
            <Container>
                <h1>Note App</h1>
                <AddNote note={state} setNoteState={setState} />
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
