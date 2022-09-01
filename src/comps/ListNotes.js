import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import ContentModal from "./ContentModal";

import "../css/comps/listNotes.scss";

function ListNotes({ noteState, setNoteState }) {
  const [showEditModal, setEditModal] = useState(false);
  const [showContentModal, setContentModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const [noteIndex, setNoteIndex] = useState("");

  const modal = (whichModal, id, index) => {
    const itemToEdit = noteState.filter((value) => {
      return value.id === id;
    });

    setModalData(itemToEdit);
    setNoteIndex(index);

    if (whichModal === "edit") {
      setEditModal(!showEditModal);
    } else if (whichModal === "content") {
      setContentModal(!showContentModal);
    }
  };

  const handleDelete = (id) => {
    const itemToDelete = noteState.filter((value) => {
      return value.id !== id;
    });
    setNoteState(itemToDelete);
  };

  const pinColour = ["blue", "green", "red", "yellow"];
  const creaseDirection = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];

  return (
    <Row className="my-4">
      <Col data-testid="EditNote">
        <h2>List Notes</h2>
        {!noteState ? (
          "No Notes!"
        ) : (
          <ul className="ps-0 d-flex flex-wrap">
            {noteState.length
              ? noteState.map((note, index) => (
                  <li
                    key={note.id}
                    className={`postit crease--${
                      creaseDirection[
                        Math.floor(Math.random() * creaseDirection.length)
                      ]
                    }`}
                  >
                    <div
                      className={`pin pin--${
                        pinColour[Math.floor(Math.random() * pinColour.length)]
                      }`}
                    ></div>
                    <div
                      className="note-content"
                      onClick={() => modal("content", note.id, index)}
                    >
                      <p className="px-2">{note.desc}</p>
                      <p className="px-2">{note.content}</p>
                    </div>
                    <div className="buttons">
                      <button
                        className="editButton"
                        type="button"
                        onClick={() => modal("edit", note.id, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="deleteButton"
                        type="button"
                        onClick={() => handleDelete(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                    {showEditModal ? (
                      <EditModal
                        showEditModal={showEditModal}
                        hideModal={setEditModal}
                        note={modalData}
                        setNote={setNoteState}
                        noteIndex={noteIndex}
                      />
                    ) : null}
                    {showContentModal ? (
                      <ContentModal
                        showContentModal={showContentModal}
                        hideModal={setContentModal}
                        note={modalData}
                      />
                    ) : null}
                    {/* <span role="button">Edit</span>
                                  <span role="button">Delete</span> */}
                  </li>
                ))
              : null}
          </ul>
        )}
      </Col>
    </Row>
  );
}

export default ListNotes;
