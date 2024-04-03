import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions";
import { useEffect } from "react";

function EditProfileForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userData));
  }, []);

  const userData = useSelector((state) => state.user);
  console.log(userData);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [bio, setBio] = useState("");
  const [area, setArea] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <Button className="m-3 border-0 bg-transparent" onClick={handleShow}>
        <img src="icons/pen.svg" alt="" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={console.log("Form inviato!")}>
            <Form.Text className="text-muted">* Indica che è obbligatorio</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control type="text" value={userData?.name || ""} required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control type="text" value={userData?.surname || ""} required />
              <Form.Control
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Parametro dinamico"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
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
              <Form.Control type="text" value={userData?.bio || ""} required />
              <Form.Control
                type="text"
                placeholder="Parametro dinamico"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
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
              <Form.Control type="text" value={userData?.area || ""} required />
              <Form.Control
                type="text"
                placeholder="Parametro dinamico"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CAP</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Città*</Form.Label>
              <Form.Control type="text" value={userData?.area || ""} required />
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
