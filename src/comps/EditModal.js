import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function EditModal({
  showEditModal,
  hideModal,
  note,
  allNotes,
  setNote,
  noteIndex,
}) {
  const [desc, setDesc] = useState(note[0].desc);
  const [content, setContent] = useState(note[0].content);
  const [tags, setTags] = useState(note[0].content);

  const handleSave = (e) => {
    e.preventDefault();

    const noteCopy = [...note];

    const updatedState = allNotes.map((obj) => {
      if (obj.id === noteCopy[0].id) {
        return { ...obj, desc, content, tags };
      }
      return obj;
    });

    setNote(updatedState);

    setDesc("");
    setContent("");
    setTags("");
    hideModal(!showEditModal);
  };

  return (
    <Modal
      className="note-modal"
      show={showEditModal}
      onHide={() => {
        hideModal(!showEditModal);
      }}
    >
      <div className="modal-postit">
        <Modal.Header closeButton>
          <Modal.Title className="position-absolute start-45">
            Edit Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mt-5">
              <label
                htmlFor="editNoteDesc"
                className="d-block text-center mb-2"
              >
                <b>{note[0].desc}:</b>
              </label>
              <input
                type="text"
                id="editNoteDesc"
                name="editNoteDesc"
                className="d-block mx-auto"
                placeholder="Edit note description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label
                htmlFor="editNoteContent"
                className="d-block text-center mb-2"
              >
                <b>{note[0].content}:</b>
              </label>
              <input
                type="text"
                id="editNoteContent"
                name="editNoteContent"
                className=" d-block mx-auto"
                placeholder="Edit note content"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="editNoteTags"
                className="d-block text-center mb-2"
              >
                <b>{note[0].tags}:</b>
              </label>
              <input
                type="text"
                id="editNoteTags"
                name="editNoteTags"
                className="d-block mx-auto"
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
              hideModal(!showEditModal);
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
      </div>
    </Modal>
  );
}
export default EditModal;
