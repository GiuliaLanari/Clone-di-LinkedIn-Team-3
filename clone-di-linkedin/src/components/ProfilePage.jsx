import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileInfoBottom from "./ProfileInfoBottom";
import ProfileInfoTop from "./ProfileInfoTop";
import SideBar from "./SideBar";

const ProfilePage = function () {
  return (
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
    </Container>
  );
};

export default ProfilePage;
