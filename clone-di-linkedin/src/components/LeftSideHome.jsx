import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../redux/actions";
const LeftSideHome = function () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <div className="d-flex align-items-center flex-column">
            <div className="mb-3">
              <img src={user.image} width="70px" alt="" />
            </div>
            <h6>
              {user.name} {user.surname}
            </h6>
            <p className="fs-footer text-secondary">{user.title}</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div>
            <p className="fs-footer text-secondary fw-medium m-0">Collegamenti</p>
            <p className="fs-footer fw-medium m-0">Espandi la tua rete</p>
          </div>
          <div>
            <img src="/icons/svgexport-23.svg" alt="" />
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="fs-footer text-secondary lh-sm m-0">Accedi a strumenti e informazioni in esclusiva</p>

          <div className="d-flex align-items-center gap-1">
            <img src="/icons/svgexport-39.svg" width="16px" alt="premium" />
            <p className="fs-footer fw-medium m-0">Prova Premium per 0 EUR</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-1">
          <img src="/icons/svgexport-36.svg" alt="" />
          <span className="fw-medium fs-footer">I miei elementi</span>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup className="mt-2">
        <ListGroup.Item className="d-flex flex-column gap-2">
          <a href="/" className="fs-footer fw-medium">
            Gruppi
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <a href="/" className="fs-footer fw-medium">
              Eventi
            </a>
            <img src="/icons/plus.svg" alt="plus" />
          </div>
          <a href="/" className="fs-footer fw-medium">
            Hashtag seguiti
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center">
          <Button variant="white" className="text-secondary fw-medium w-100">
            Scopri di più
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default LeftSideHome;
