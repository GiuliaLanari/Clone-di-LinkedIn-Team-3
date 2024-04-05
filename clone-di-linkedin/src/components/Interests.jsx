import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Interests = function () {
  const [clicked, setClicked] = useState(null);

  const handleClick = (btnId) => {
    if (clicked === btnId) {
      setClicked(null);
    } else {
      setClicked(btnId);
    }
  };

  return (
    <Row className="g-0">
      <Col>
        <div className="interests-col">
          <div className="act">
            <h3 className="mb-0">Interessi</h3>
          </div>
          <div className="d-flex gap-3 align-items-baseline">
            <button
              onClick={() => handleClick("aziende")}
              className={
                "btn-interests rounded-0 py-3 px-1 " + (clicked === "aziende" ? "btn-underline" : "text-black")
              }
            >
              Aziende
            </button>
            <button
              onClick={() => handleClick("scuole o università")}
              className={
                "btn-interests rounded-0 py-3 px-1 " +
                (clicked === "scuole o università" ? "btn-underline" : "text-black")
              }
            >
              Scuole o università
            </button>
          </div>
        </div>
        <hr className="mt-0" />

        <Row className="interests-col-2 analisis-desc ">
          <div className="d-flex gap-2">
            <div className="p-0 d-flex gap-3">
              <Col>
                <img src="/EpicodeLogo.png" width={"40px"} height={"40px"} alt="Epicode Logo" />
              </Col>
              <div>
                <h6 className="mb-0 fw-bold">EPICODE</h6>
                <p className="mb-2">14.341 follower</p>

                <Button className="rounded-pill dec-btn text-secondary btn-dark" onClick={handleClick}>
                  <img src="/icons/check.svg" alt="" className="me-1" />
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
