import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileInfoTop from "./components/ProfileInfoTop";
import Footer from "./components/Footer";

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
          <Col xs={9} id="topMain">
            <ProfileInfoTop />
          </Col>
          <Col xs={3} className=" p-2" id="side"></Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
