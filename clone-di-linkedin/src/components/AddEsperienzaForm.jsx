import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ExperienzeForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-pen-btn rounded-circle" onClick={handleShow}>
        <img src="icons/plus.svg" alt="aggiungi esperienza" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={console.log("Form inviato!")}>
            <Form.Group className="mb-3">
              <Form.Label>Azienda:</Form.Label>
              <Form.Control type="text" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ruolo ricoperto:</Form.Label>
              <Form.Control type="text" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci immagine:</Form.Label>
              <Form.Control type="url" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <label for="start" className="me-3">
                Start date:
              </label>
              <input type="date" name="trip-start" />
            </Form.Group>

            <Modal.Footer className="d-flex">
              <Button variant="primary" type="submit" onClick={handleClose}>
                Salva
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExperienzeForm;
