import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Training = function () {
  return (
    <Row className="g-0">
      <Col className="training-col">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="act">
            <h3 className="mb-0">Formazione</h3>
          </div>
          <div className="d-flex gap-3 align-items-baseline">
            <div>
              <Button className="add-pen-btn rounded-circle ">
                <img src="/icons/plus.svg" alt="" />
              </Button>
            </div>
            <Button className="add-pen-btn rounded-circle">
              <img src="/icons/pen.svg" alt="" />
            </Button>
          </div>
        </div>

        <Row className=" mt-2 analisis-desc ">
          <div className="d-flex gap-2">
            <div className="p-0 d-flex align-items-center gap-3">
              <img src="/EpicodeLogo.png" width={"40px"} height={"40px"} alt="Epicode Logo" />
              <h6 className="mb-0 fw-bold">EPICODE</h6>
            </div>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Training;
