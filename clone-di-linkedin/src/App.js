import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Messagistica from "./components/Messagistica";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileInfoTop from "react-bootstrap/ProfileInfoTop";
import ProfileInfoBottom from "react-bootstrap/ProfileInfoBottom";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="justify-content-between g-0">
          <Col xs={9}>
            <ProfileInfoTop />
            <ProfileInfoBottom />
          </Col>
          <Col xs={3} className="p-2">
            <SideBar />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
        <Messagistica/>
      </Container>
    </>
  );
}

export default App;
