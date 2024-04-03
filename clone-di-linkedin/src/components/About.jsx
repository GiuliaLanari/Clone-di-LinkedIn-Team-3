import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = function () {
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div className="d-flex justify-content-between">
          <div className="act">
            <h3 className="mb-0">Informazioni</h3>
          </div>
        </div>

        <Row className=" mt-2 analisis-desc ">
          <Col xs={12}>
            <p>
              I envision a world in which everyone can live healthy, productive lives, regardless of who they are or
              where they live. (Dinamic)
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
