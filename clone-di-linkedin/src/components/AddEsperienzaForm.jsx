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
  // const experiences = useSelector((state) => state.experiences);
  const userId = useSelector((state) => state.user._id);
  // const addExperienze = useSelector((state) => state.experiences);
  // const userId = useSelector((state) => state.user._id);
  // const [form, setForm] = useState({
  //   role: "",
  //   company: "",
  //   startDate: "",
  //   image: "",
  // });
  const dispatch = useDispatch();
  ///////COME FACCIO A SETTARE IL VALORE DELLO STATO GLOBALE///
  ///QUI SOTTO///
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newExperienze(userId));
  };

  return (
    <>
      <Button className="m-3 border-0 bg-transparent" onClick={handleShow}>
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
                // value={ userId? : ""}
                // onChange={(e) =>
                //   setForm((state) => ({
                //     ...state,
                //     companny: e.target.value,
                //   }))
                // }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ruolo ricoperto:</Form.Label>
              <Form.Control
                type="text"
                required
                // value={form ? addExperienze.role : ""}
                // onChange={(e) =>
                //   setForm((state) => ({
                //     ...state,
                //     role: e.target.value,
                //   }))
                // }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci immagine:</Form.Label>
              <Form.Control
                type="url"
                required
                // value={form ? addExperienze.image : ""}
                // onChange={(e) =>
                //   setForm((state) => ({
                //     ...state,
                //     image: e.target.value,
                //   }))
                // }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <label for="start" className="me-3">
                Start date:
              </label>
              <input
                type="date"
                name="trip-start"
                // value={form ? addExperienze.startDate : ""}
                // onChange={(e) =>
                //   setForm((state) => ({
                //     ...state,
                //     startDate: e.target.value,
                //   }))
                // }
              />
            </Form.Group>

            <Modal.Footer className="d-flex">
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  dispatch(newExperienze(userId));
                }}
              >
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
