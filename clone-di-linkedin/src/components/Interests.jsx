import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Interests = function () {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Row className="g-0">
      <Col>
        <div className="interests-col">
          <div className="act">
            <h3 className="mb-0">Interessi</h3>
          </div>
          <div className="d-flex gap-3 align-items-baseline">
            <Button className="btn-interests text-black rounded-0 py-3 px-1">Aziende</Button>
            <Button className="btn-interests text-black rounded-0 py-3 px-1">Scuole o università</Button>
          </div>
        </div>
        <hr className="mt-0" />

        <Row className="interests-col-2 analisis-desc ">
          <div className="d-flex gap-2">
            <div className="p-0 d-flex gap-3">
              <Col>
                <img
                  src="data:image/jpeg;base64,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"
                  width={"40px"}
                  height={"40px"}
                  alt=""
                />
              </Col>
              <div>
                <h6 className="mb-0 fw-bold">EPICODE</h6>
                <p className="mb-2">14.341 follower</p>

                <Button className="rounded-pill dec-btn text-secondary" onClick={handleClick}>
                  <img src="icons/check.svg" alt="" className="me-1" />
                  Già segui
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Interests;