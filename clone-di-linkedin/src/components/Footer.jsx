import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Footer = function () {
  return (
    <Container Container className="text-secondary">
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={4}></Col>
            <Row>
              <Col xs={12} md={4}>
                <p>Informazione</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Accessibilità</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Talent Solutions</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Linee guida della community</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Carriera</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Soluzioni di marketing</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Privacy e condizioni</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Opzioni per gli annunci pubblicitari</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Pubblicità</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Sales Solutions</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Mobile</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Piccole imprese</p>
              </Col>
              <Col xs={12} md={4}>
                <p>Centro sicurezza</p>
              </Col>
            </Row>
            <Col xs={12} md={6}></Col>
          </Row>
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
      <Row>
        <Col>
          <p>LinkedIn Corporation &copy; 2024</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
