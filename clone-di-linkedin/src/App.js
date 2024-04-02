import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="navbar"></Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-between g-0">
          <Col xs={9} id="topMain"></Col>
          <Col xs={3} className=" p-2" id="side"></Col>
        </Row>
        <Row>
          <Col xs={12} id="footer">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
