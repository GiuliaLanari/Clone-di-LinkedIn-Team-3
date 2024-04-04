import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newExperienze } from "../redux/actions";

function ExperienzeForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = useSelector((state) => state.user._id);

  const [form, setForm] = useState({
    role: "",
    company: "",
    startDate: "",
    image: "",
    description: "",
    area: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newExperienze(userId, form));
  };

  return (
    <>
      <Button className="m-3 border-0 exp-btn" onClick={handleShow}>
        <img src="icons/plus.svg" alt="aggiungi esperienza" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Azienda:</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.company}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    company: e.target.value,
                  }))
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Area:</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.area}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    area: e.target.value,
                  }))
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione:</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.description}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    description: e.target.value,
                  }))
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ruolo ricoperto:</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.role}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    role: e.target.value,
                  }))
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci immagine:</Form.Label>
              <Form.Control
                type="url"
                required
                value={form.image}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    image: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <label htmlFor="start" className="me-3">
                Start date:
              </label>
              <input
                type="date"
                name="trip-start"
                value={form.stateDate}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    startDate: e.target.value,
                  }))
                }
              />
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
