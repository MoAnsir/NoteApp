import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import "../css/comps/listNotes.scss";

function ListNotes({ setExpenses, expenses }) {
    return (
        <Row>
            <Col>
                <h2>List Notes</h2>
                <ul className="ps-0">
                    <li>
                        <p>description</p>
                        <p>Note content</p>
                        <p>Tags</p>
                        <p>Edit</p>
                        <p>Delete</p>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}

export default ListNotes;
