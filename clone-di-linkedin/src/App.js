import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Messagistica from "./components/Messagistica";

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
