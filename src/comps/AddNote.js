import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function AddNote({ setExpenses, expenses }) {
    return (
        <Row>
            <Col>
                <h2>Add Notes</h2>
                <p>description</p>
                <p>note content</p>
                <p>tags</p>
            </Col>
        </Row>
    );
}

export default AddNote;
