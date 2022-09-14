import { Container } from "react-bootstrap";
import ListNotes from "./comps/ListNotes";
import AddNote from "./comps/AddNote";
import { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import "./css/main/App.scss";

function App({ testdata }) {
  const [nState, setNState] = useState(testdata ? testdata : null);

  useEffect(() => {
    if (!testdata) {
      get("test").then((val) => {
        setNState(val);
      });
    }
  }, []);

  useEffect(() => {
    if (nState) {
      set("test", nState);
    }
  }, [nState]);

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
