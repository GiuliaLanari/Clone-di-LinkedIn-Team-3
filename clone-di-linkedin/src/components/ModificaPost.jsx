import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postModifica } from "../redux/actions";

const ModificaPost = function ({ postId, post }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(postId);
  const [form, setForm] = useState({
    text: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postModifica(postId, form));
  };

  return (
    <>
      <Button className=" border-0  exp-btn h-100" onClick={handleShow}>
        <img src="/icons/pen.svg" alt="aggiungi esperienza" />
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Post testo:</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.text}
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    text: e.target.value,
                  }))
                }
              ></Form.Control>
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
};
export default ModificaPost;
