import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddNote({ setNoteState }) {
    const [desc, setDesc] = useState("");
    const [note, setNote] = useState("");
    const [tag, setTag] = useState("");

    const handleAddNote = (e) => {
        e.preventDefault();

        if ((desc, note, tag)) {
            setNoteState((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    desc,
                    content: note,
                    tags: tag,
                },
            ]);
        }
        setDesc("");
        setNote("");
        setTag("");
    };

    return (
        <Row>
            <Col data-testid="AddNote">
                <h2>Add Notes</h2>
                <form>
                    <div>
                        <label htmlFor="noteDesc">Description</label>
                        <input
                            type="text"
                            id="noteDesc"
                            name="noteDesc"
                            placeholder="Description of the note"
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="noteContent">Note</label>
                        <input
                            type="text"
                            id="noteContent"
                            name="noteContent"
                            placeholder="Note content"
                            value={note}
                            onChange={(e) => {
                                setNote(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="noteTags">Tags</label>
                        <input
                            type="text"
                            id="noteTags"
                            name="noteTags"
                            placeholder="work, important, p1"
                            value={tag}
                            onChange={(e) => {
                                setTag(e.target.value);
                            }}
                        />
                        {/* <span>tooltip</span> */}
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleAddNote(e)}
                    />
                </form>
            </Col>
        </Row>
    );
}

export default AddNote;
