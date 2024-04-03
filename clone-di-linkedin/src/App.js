import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileInfoTop from "./components/ProfileInfoTop";
import Footer from "./components/Footer";
import ProfileInfoBottom from "./components/ProfileInfoBottom";
import MyNavbar from "./components/MyNavbar";

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
      </Container>
    </>
  );
}

export default App;
