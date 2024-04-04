import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileInfoBottom from "./ProfileInfoBottom";
import ProfileInfoTop from "./ProfileInfoTop";
import SideBar from "./SideBar";
import Footer from "./Footer";

const ProfilePage = function () {
  return (
    <Container>
      <Row className="justify-content-between g-0">
        <Col xs={12} md={8} lg={9} className="px-2">
          <ProfileInfoTop />
          <ProfileInfoBottom />
        </Col>
        <Col xs={12} md={4} lg={3} className="px-2">
          <SideBar />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
