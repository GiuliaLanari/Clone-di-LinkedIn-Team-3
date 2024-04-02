import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

const Footer = function () {
  return (
    <>
      <Row className="text-secondary mt-5">
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={4}></Col>
            <Row>
              <Col xs={12} md={4}>
                <a href="#Informazioni" className="aFooter fs-footer">
                  Informazione
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Accessibilità" className="aFooter fs-footer">
                  Accessibilità
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Talent" className="aFooter fs-footer">
                  Talent Solutions
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="Linee" className="aFooter fs-footer">
                  Linee guida della community
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Carriera" className="aFooter fs-footer">
                  Carriera
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Soluzioni" className="aFooter fs-footer">
                  Soluzioni di marketing
                </a>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <NavDropdown
                    id="nav-dropdown-light-example"
                    title="Privacy e condizioni"
                    menuVariant="light"
                    className="aFooter fs-footer"
                  >
                    <NavDropdown.Item href="#action/3.1" className="fs-footer">
                      Informazioni sulla privacy{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="fs-footer">
                      Contratto di licenza
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="fs-footer">
                      Termini e condizioni delle pagine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="fs-footer">
                      Informativa sui cookie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" className="fs-footer">
                      Informativa sul copyright
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Opzioni" className="aFooter fs-footer">
                  Opzioni per gli annunci pubblicitari
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Pubblicità" className="aFooter fs-footer">
                  Pubblicità
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Sales" className="aFooter fs-footer">
                  Sales Solutions
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Mobile" className="aFooter fs-footer">
                  Mobile
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="Piccole" className="aFooter fs-footer">
                  Piccole imprese
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href="#Centro" className="aFooter fs-footer">
                  Centro sicurezza
                </a>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12}>
                  <a href="Domande" className="aFooter fs-footerQ ">
                    <img src={"icons/svgexport-80.svg"} alt="icon" className="me-1" />
                    Domande?
                  </a>
                  <p className="fs-footer">Visita il nostro Centro assistenza.</p>
                </Col>
                <Col xs={12}>
                  <a href="#Gestisci" className="aFooter fs-footerQ">
                    <img src={"icons/svgexport-81.svg"} alt="icon" className="me-1" />
                    Gestisci il tuo accaunt e la tua privacy
                  </a>
                  <p className="fs-footer">Vai alle impostazioni</p>
                </Col>
                <Col xs={12}>
                  <a href="Trasparenza" className="aFooter fs-footerQ">
                    <img src={"icons/svgexport-82.svg"} alt="icon" className="me-1" />
                    Trasparenza sui contenuti consigliati
                  </a>
                  <p className="fs-footer">Scopri di più sui contenuti consigliati.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Col xs={12}>
                <p className="fs-footer ">Seleziona lingua</p>
                <Navbar className="border me-5 ms-1 p-1 rounded border-black fs-footer">
                  <NavDropdown id="nav-dropdown-light-example" title="Italiano (italiano)" menuVariant="light">
                    <NavDropdown.Item href="#action/3.1" className="fs-footer">
                      English (English){" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="fs-footer">
                      Bahasa Indonesia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="fs-footer">
                      Dansk (Dansk)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="fs-footer">
                      Português (Português)
                    </NavDropdown.Item>
                  </NavDropdown>
                </Navbar>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="fs-footer text-secondary ">LinkedIn Corporation &copy; 2024</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
