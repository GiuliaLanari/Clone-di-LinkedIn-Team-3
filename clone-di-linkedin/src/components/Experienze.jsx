import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Experienze = function () {
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div className="d-flex justify-content-between">
          <div className="act">
            <h3 className="mb-0">Esperienza</h3>
          </div>
        </div>

        <Row className=" mt-2 analisis-desc ">
          <Col xs={12}>
            <Row>
              <Col xs={1}>
                <img src={"unaids_logo.jpg"} alt="logo-school" className="w-100" />
              </Col>
              <Col xs={10}>
                <h6 className="mb-0">Chair the Programme Coordinating Board-dinamic</h6>
                <p className="mb-0">UNAIDS-dinamic</p>
                <p className="mb-0">2009 - 2010 · 1 anno - dinamic</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Button className="btn-border rounded-0 text-black">
        Mostra tutti i titoli di studio (numero esperienze)
        <img src="icons/right-arrow.svg" alt="" />
      </Button>
    </Row>
  );
};

export default Experienze;
