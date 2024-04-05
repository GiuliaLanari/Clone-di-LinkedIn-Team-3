import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { experiencesModifica } from "../redux/actions";

function EditEsperienzaForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    role: "",
    company: "",
    startDate: "",
    image: "",
    description: "",
    area: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(experiencesModifica(props.expId, props.userId, form));
  };

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + props.userId + "/experiences/" + props.expId, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((exp) => {
        setForm(exp);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Button className=" border-0 add-pen-btn  exp-btn h-100" variant="white" onClick={handleShow}>
        <img src="/icons/pen.svg" alt="aggiungi esperienza" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
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
                value={form.startDate}
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

export default EditEsperienzaForm;
