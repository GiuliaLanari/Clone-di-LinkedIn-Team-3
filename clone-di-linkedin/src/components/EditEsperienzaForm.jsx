import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { experiencesList } from "../redux/actions";
import { experiencesModifica } from "../redux/actions";

function EditEsperienzaForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(experiencesList(experiences));
  // }, []);

  const experiences = useSelector((state) => state.experiences);
  const userId = useSelector((state) => state.user._id);
  const expId = experiences._id;

  const [form, setForm] = useState({
    role: experiences.role,
    company: experiences.company,
    startDate: experiences.startDate,
    image: experiences.image,
    description: experiences.description,
    area: experiences.area,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(experiencesModifica(expId, userId, form));
  };

  return (
    <>
      <Button className="m-3 border-0 bg-transparent" onClick={handleShow}>
        <img src="icons/pen.svg" alt="aggiungi esperienza" />
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
                value={experiences.company ? experiences.company : form.company}
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
                value={experiences.area ? experiences.area : form.area}
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
                value={experiences.description ? experiences.description : form.description}
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
                value={experiences.role ? experiences.role : form.role}
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
                value={experiences.image ? experiences.image : form.image}
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
                value={experiences.startDate ? experiences.startDate : form.startDate}
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
