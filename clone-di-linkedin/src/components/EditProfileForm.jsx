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
  const userData = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser(userData));
  }, []);
  const [user, setUser] = useState({
    name: userData.name,
    surname: userData.surname,
    bio: userData.bio,
    area: userData.area,
    title: userData.title,
    image: userData.image,
  });
  const editForm = function (e) {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((data) => {
        dispatch(getUser(userData));
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Button className="m-3 add-pen-btn rounded-circle py-1 px-2" onClick={handleShow}>
        <img src="icons/pen.svg" alt="" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={editForm}>
            <Form.Text className="text-muted">* Indica che è obbligatorio</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                type="text"
                value={user.name}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    name: e.target.value,
                  }))
                }
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                type="text"
                value={user?.surname || ""}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    surname: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lavoro*</Form.Label>
              <Form.Control
                type="text"
                value={user?.title || ""}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    title: e.target.value,
                  }))
                }
                required
              />
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
              <Form.Control
                type="text"
                placeholder="Parametro dinamico"
                value={user?.bio || ""}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    bio: e.target.value,
                  }))
                }
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
              <Form.Control
                type="text"
                placeholder="Parametro dinamico"
                value={user?.area}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    area: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Immagine del profilo (facoltativa)</Form.Label>
              <Form.Control
                type="text"
                value={user?.image}
                onChange={(e) =>
                  setUser((state) => ({
                    ...state,
                    image: e.target.value,
                  }))
                }
              />
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
