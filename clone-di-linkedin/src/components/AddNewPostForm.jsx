import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { postPost } from "../redux/actions/posts";

const AddNewPostForm = function () {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [inputValue, setInputValue] = useState({
    text: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPost(inputValue));
  };

  return (
    <>
      <a href="#i" className="me-2">
        <span>
          <img
            className="rounded-circle shadow-4-strong"
            alt="avatar2"
            width={50}
            height={50}
            src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
          />
        </span>
      </a>
      <button className="post-btn border borde-2" onClick={handleShow}>
        <span>Avvia un post</span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <button className="d-flex align-items-center border-0 bg-transparent p-2">
              <img
                className="rounded-circle shadow-4-strong me-2"
                alt="avatar2"
                width={50}
                height={50}
                src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
              />
              <div className=" detail">
                <span>"Il tuo nome DINAMICO"</span>
                <p className="mb-0">Pubblica: Chiunque</p>
              </div>
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <textarea
                className="form-control border border-0 px-2"
                value={inputValue.text}
                onChange={(e) =>
                  setInputValue((state) => ({
                    ...state,
                    text: e.target.value,
                  }))
                }
                id="exampleFormControlTextarea1"
                placeholder="Di cosa vuoi parlare?"
                rows="8"
              ></textarea>
            </Form.Group>
            <div className="ms-1">
              <img src="/icons/face.svg" alt="" className="face-img rounded-circle p-2" />
            </div>
            <div className="d-flex post-icons gap-2 my-4 ms-1">
              <span className="rounded-circle">
                <img src="/icons/image1.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/calendar.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/set.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/bag.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/graphic.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/add-file.svg" alt="" />
              </span>
              <span className="rounded-circle">
                <img src="/icons/catch.svg" alt="" />
              </span>
            </div>
            <Modal.Footer className="d-flex">
              <div>
                <img src="/icons/clock.svg" alt="" className="face-img rounded-circle p-2" />
              </div>

              <button type="submit" className="publish-btn rounded-pill py-1 px-3 text-secondary" onClick={handleClose}>
                Pubblica
              </button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewPostForm;
