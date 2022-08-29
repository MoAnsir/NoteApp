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
                <h3 className="text-center">Edit note:</h3>
                <form>
                    <div>
                        <label htmlFor="editNoteDesc">
                            Note Description: <b>{note[0].desc}</b>
                        </label>
                        <input
                            type="text"
                            id="editNoteDesc"
                            name="editNoteDesc"
                            className="mx-2"
                            placeholder="Edit note description"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="editNoteContent">
                            Note Content: <b>{note[0].content}</b>
                        </label>
                        <input
                            type="text"
                            id="editNoteContent"
                            name="editNoteContent"
                            className=" mx-2"
                            placeholder="Edit note content"
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="editNoteTags">
                            Note Tags: <b>{note[0].tags}</b>
                        </label>
                        <input
                            type="text"
                            id="editNoteTags"
                            name="editNoteTags"
                            className=" mx-2"
                            placeholder="Edit note tags"
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                </form>
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
