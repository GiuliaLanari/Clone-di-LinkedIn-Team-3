import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="navbar"></Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-between">
          <div id="topMain"></div>
          <div id="side"></div>
        </Row>
        <Row>
          <Col xs={12} id="footer"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
