import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function EditModal({ showModal, hideModal, note, setNote, noteIndex }) {
    const [desc, setDesc] = useState(note[0].desc);
    const [content, setContent] = useState(note[0].content);
    const [tags, setTags] = useState(note[0].content);

    const handleSave = (e) => {
        e.preventDefault();

        const editedNote = note.filter((value) => {
            return value.id === note[0].id;
        });

        editedNote[0].desc = desc;
        editedNote[0].content = content;
        editedNote[0].tags = tags;

        const noteEditState = { ...note };
        noteEditState[noteIndex] = editedNote;

        setDesc("");
        setContent("");
        setTags("");
        hideModal(!showModal);
    };

    return (
        <Modal
            show={showModal}
            onHide={() => {
                hideModal(!showModal);
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Note description: <b>{note[0].desc}</b>
                </p>
                <p>
                    Note content: <b>{note[0].content}</b>
                </p>
                <p>
                    Note tags: <b>{note[0].tags}</b>
                </p>
                <p className="d-inline">Edit note:</p>
                <br />
                <input
                    type="text"
                    className="d-inline mx-2"
                    placeholder="Edit note description"
                    onChange={(e) => setDesc(e.target.value)}
                />
                <input
                    type="text"
                    className="d-inline mx-2"
                    placeholder="Edit note content"
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    type="text"
                    className="d-inline mx-2"
                    placeholder="Edit note tags"
                    onChange={(e) => setTags(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        hideModal(!showModal);
                    }}
                >
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={(e) => {
                        handleSave(e);
                    }}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default EditModal;
