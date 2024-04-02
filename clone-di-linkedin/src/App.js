import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
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
        <Row className="justify-content-between g-0">
          <Col xs={9} id="topMain"></Col>
          <Col xs={3} className=" p-2" id="side">
            <SideBar />
          </Col>
        </Row>
        <Row>
          <Col xs={12} id="footer"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
