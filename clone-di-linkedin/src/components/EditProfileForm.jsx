import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditProfileForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Text className="text-muted">* Indica che è obbligatorio</Form.Text>

            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome Aggiuntivo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Text className="text-muted">Pronuncia del nome</Form.Text>
            <p>
              <img src="icons/i.svg" alt="" />
              Può essere aggiunta solo usando la nostra app per dispositivi mobili
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci pronomi personalizzati</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.
              </Form.Text>
            </Form.Group>
            <p>
              Scopri di più sui <a href="/">pronomi di genere.</a>{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Sommario*</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <h4>Posizione attuale</h4>
              <button className="border-0">
                <img src="icons/plus.svg" alt="" />
                Aggiungi una nuova posizione lavorativa
              </button>
            </Form.Group>
            <h4>Località</h4>
            <Form.Group className="mb-3">
              <Form.Label>Paese/Area geografica*</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CAP</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Città*</Form.Label>
              <Form.Control type="text" placeholder="Parametro dinamico" required />
            </Form.Group>

            <Modal.Footer>
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

export default EditProfileForm;
