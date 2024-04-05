import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostComponent from "./PostComponent";
import RightBar from "./RightBar";
import AddPostHomePage from "./AddPostHomePage";

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
          <AddPostHomePage />
          <PostComponent />{" "}
        </Col>
        <Col xs={12} md={12} lg={3} className="ps-2">
          <RightBar />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
