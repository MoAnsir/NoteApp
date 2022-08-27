import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function AddNote({ setExpenses, expenses }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FORM Submitted");
    };

    return (
        <Row>
            <Col>
                <h2>Add Notes</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="noteDesc">Description</label>
                        <input
                            type="text"
                            id="noteDesc"
                            name="noteDesc"
                            placeholder="Description of the note"
                        />
                    </div>
                    <div>
                        <label htmlFor="noteContent">Note</label>
                        <input
                            type="text"
                            id="noteContent"
                            name="noteContent"
                            placeholder="Note content"
                        />
                    </div>
                    <div>
                        <label htmlFor="noteTags">Tags</label>
                        <input
                            type="text"
                            id="noteTags"
                            name="noteTags"
                            placeholder="work, important, p1"
                        />
                        {/* <span>tooltip</span> */}
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </Col>
        </Row>
    );
}

export default AddNote;
