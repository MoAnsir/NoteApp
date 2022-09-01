import { Modal, Button } from "react-bootstrap";

function ContentModal({ showContentModal, hideModal, note }) {
  return (
    <Modal
      className="note-modal"
      show={showContentModal}
      onHide={() => {
        hideModal(!showContentModal);
      }}
    >
      <div className="modal-postit">
        <Modal.Header closeButton>
          <Modal.Title className="position-absolute start-45">Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="note-content">
            <p className="text-center">
              <b>{note[0].desc}</b>
            </p>
            <p className="text-center">
              <b>{note[0].content}</b>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              hideModal(!showContentModal);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
export default ContentModal;
