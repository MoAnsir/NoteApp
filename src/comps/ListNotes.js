import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import EditModal from "./EditModal";

import "../css/comps/listNotes.scss";

function ListNotes({ noteState, setNoteState }) {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState("");
    const [noteIndex, setNoteIndex] = useState("");

    const handleEdit = (id, index) => {
        const itemToEdit = noteState.filter((value) => {
            return value.id === id;
        });
        setModalData(itemToEdit);
        setShowModal(!showModal);
        setNoteIndex(index);
    };

    const handleDelete = (id) => {
        const itemToDelete = noteState.filter((value) => {
            return value.id !== id;
        });
        setNoteState(itemToDelete);
    };

    return (
        <Row>
            <Col data-testid="EditNote">
                <h2>List Notes</h2>
                <ul className="ps-0">
                    {noteState.length
                        ? noteState.map((note, index) => (
                              <li key={note.id}>
                                  <p>{note.desc}</p>
                                  <p>{note.content}</p>
                                  <input
                                      type="button"
                                      value="edit"
                                      onClick={() => handleEdit(note.id, index)}
                                  />
                                  <input
                                      type="button"
                                      value="delete"
                                      onClick={() => handleDelete(note.id)}
                                  />
                                  {modalData ? (
                                      <EditModal
                                          showModal={showModal}
                                          hideModal={setShowModal}
                                          note={modalData}
                                          setNote={setNoteState}
                                          noteIndex={noteIndex}
                                      />
                                  ) : null}
                                  {/* <span role="button">Edit</span>
                                  <span role="button">Delete</span> */}
                              </li>
                          ))
                        : null}
                </ul>
            </Col>
        </Row>
    );
}

export default ListNotes;
