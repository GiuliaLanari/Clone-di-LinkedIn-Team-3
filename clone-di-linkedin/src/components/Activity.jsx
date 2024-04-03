import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Activity = function () {
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div className="d-flex justify-content-between">
          <div className="act">
            <h3 className="mb-0">Attività</h3>
            <div className="d-flex align-items-center">
              <p className="mb-0">0 follower</p>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-baseline">
            <div>
              <Button className="rounded-pill btn-crea fw-bold">Crea un post</Button>
            </div>
            <Button className="add-pen-btn">
              <img src="icons/pen.svg" alt="" />
            </Button>
          </div>
        </div>

        <Row className=" my-2 analisis-desc ">
          <div className="d-flex gap-2">
            <div className="p-0">
              <h6 className="mb-0">Non hai ancora pubblicato nulla</h6>
              <p className="mb-0">I post che condividi appariranno qui</p>
            </div>
          </div>
        </Row>
      </Col>

      <Button className="btn-border rounded-0 text-black">
        Mostra tutte le attività <img src="icons/right-arrow.svg" alt="" />
      </Button>
    </Row>
  );
};

export default Activity;
