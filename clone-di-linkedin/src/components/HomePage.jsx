import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostComponent from "./PostComponent";

import LeftSideHome from "./LeftSideHome";
const HomePage = function () {
  return (
    <Container>
      <Row className="justify-content-between g-0">
        <Col xs={12} md={4} lg={2} className="px-2">
          <LeftSideHome />
        </Col>
        <Col xs={12} md={8} lg={7} className="px-2">
          {" "}
          <PostComponent />{" "}
        </Col>
        <Col xs={12} md={12} lg={3} className="px-2"></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
