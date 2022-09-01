import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState } from "react";
import "./css/main/App.scss";

function App({ testdata }) {
  const [nState, setNState] = useState(testdata ? testdata : null);

  return (
    <div className="App">
      <h1 className="my-5">Note App</h1>
      <Container className="mb-5">
        <AddNote noteState={nState} setNoteState={setNState} />
        <ListNotes noteState={nState} setNoteState={setNState} />
      </Container>
    </div>
  );
}

export default App;
