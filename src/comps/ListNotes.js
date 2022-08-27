import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import "../css/comps/listNotes.scss";

function ListNotes({ noteState, setNoteState }) {
    return (
        <Row>
            <Col>
                <h2>List Notes</h2>
                <ul className="ps-0">
                    {!noteState.length
                        ? "No data"
                        : noteState.map((note, index) => (
                              <li key={note.id}>
                                  <p>{note.desc}</p>
                                  <p>{note.content}</p>
                                  <input type="button" value="edit" />
                                  <input type="button" value="delete" />
                                  {/* <span role="button">Edit</span>
                                  <span role="button">Delete</span> */}
                              </li>
                          ))}
                </ul>
            </Col>
        </Row>
    );
}

export default ListNotes;
