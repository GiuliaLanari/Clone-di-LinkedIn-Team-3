import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  return (
    <Navbar id="navbar" className="bg-white sticky-lg-top border-bottom py-0 pt-1 mb-3 d-flex">
      <Container>
        <div className="d-flex">
          <NavbarBrand href="/" className="linkedin logo">
            <Col className="d-flex align-items-center">
              <Link to={"/home/:id"}>
                <span className="me-2">
                  <img src="/icons/NavLogo.svg" alt="linkedin log" />
                </span>
              </Link>
              <span>
                <Form>
                  <input type="text" id="search" name="search" className=" fs-6" placeholder="Cerca" />
                </Form>
              </span>
            </Col>
          </NavbarBrand>
        </div>
        {/* <div className="d-flex  align-items-center "> */}
        <div className="d-flex justify-content-between align-items-center" id="icons-wrap">
          <Link to={"/home/:id"} className="d-flex flex-column align-items-center text-decoration-none">
            <img src="/icons/home.svg" alt="go to homepage" />
            <p className="navbar-top  fs-12">Home</p>
          </Link>
          <Nav.Link className="d-flex flex-column align-items-center text-decoration-none">
            {/* Network */}
            <img src="/icons/rete.svg" alt="Network" />
            <p className=" navbar-top  fs-12">Rete</p>
          </Nav.Link>

          <Nav.Link className="d-flex flex-column align-items-center text-decoration-none">
            {/* Jobs */}
            <img src="/icons/jobs.svg" alt="" />
            <p className="navbar-top fs-12">Jobs</p>
          </Nav.Link>
          <Nav.Link className="d-flex flex-column text-decoration-none align-items-center ">
            {/* Messaging */}
            <img src="/icons/messaggi.svg" alt="" />
            <p className="navbar-top fs-12">Messaggi</p>
          </Nav.Link>
          <Nav.Link className="d-flex flex-column text-decoration-none align-items-center ">
            {/* Notifiche */}
            <img src="/icons/notifiche.svg" alt="" />
            <p className="navbar-top fs-12">Notifiche</p>
          </Nav.Link>
          <Nav.Link className="text-decoration-none align-items-center me-4">
            {/* Profile */}
            <Dropdown className="d-flex flex-column  align-items-center">
              <img className="rounded-circle shadow-4-strong resized-avatar" alt="user" src={user.image} />

              <Dropdown.Toggle className="bg-white text-dark border-0 p-0 d-flex align-items-center d-flex text-sm">
                Tu
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="mt-2"
                align="end"
                style={{ maxHeight: "400px", width: "280px", overflowY: "auto" }}
              >
                <ListGroup className="mb-2">
                  {/*/////////////// PROFILO SIMONE ///////////////*/}
                  <ListGroup.Item className="border-0">
                    <div className="d-flex align-items-start gap-2">
                      <img
                        src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="draft_picture"
                        width="60px"
                        height={"60px"}
                        className="image_dropdown_navbar object-fit-cover"
                      />

                      <div>
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="fw-semibold m-0">Simone</h5>
                          <p className="text-secondary text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <Link to={"/profile/660bbe39a281d80019a3ec49"}>
                      <Button className="w-100 p-0 rounded-pill bg-transparent text-primary" size="sm">
                        Visualizza Profilo
                      </Button>
                    </Link>
                  </ListGroup.Item>

                  <ListGroup.Item className="border-0">
                    <h5>Account</h5>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Prova Premium per 0 EUR
                    </p>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Impostazioni e privacy
                    </p>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Guida
                    </p>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Lingua
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <h5>Gestisci</h5>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Post e Attività
                    </p>
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Account per la pubblicazione di of
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <p className="m-1 text-secondary" style={{ fontSize: "14px" }}>
                      Esci
                    </p>
                  </ListGroup.Item>

                  {/*/////////////// PROFILO INNOCENZO ///////////////*/}
                  <ListGroup.Item className="border-0">
                    <div className="d-flex align-items-start gap-2">
                      <img
                        src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="draft_picture"
                        width="60px"
                        height={"60px"}
                        className="image_dropdown_navbar object-fit-cover"
                      />

                      <div>
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="fw-semibold m-0">Innocenzo</h5>
                          <p className="text-secondary text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <Link to={"/profile/660e54b613df0a001949f3df"}>
                      <Button className="w-100 p-0  rounded-pill bg-transparent text-primary" size="sm">
                        Visualizza Profilo
                      </Button>
                    </Link>
                  </ListGroup.Item>

                  {/*/////////////// PROFILO MIA ///////////////*/}
                  <ListGroup.Item className="border-0">
                    <div className="d-flex align-items-start gap-2">
                      <img
                        src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="draft_picture"
                        width="60px"
                        height={"60px"}
                        className="image_dropdown_navbar object-fit-cover"
                      />

                      <div>
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="fw-semibold m-0">Mia</h5>
                          <p className="text-secondary text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <Link to={"/profile/660bbe01a281d80019a3ec48"}>
                      <Button className="w-100 p-0  rounded-pill bg-transparent text-primary" size="sm">
                        Visualizza Profilo
                      </Button>
                    </Link>
                  </ListGroup.Item>

                  {/*/////////////// PROFILO GIULIA ///////////////*/}
                  <ListGroup.Item className="border-0">
                    <div className="d-flex align-items-start gap-2">
                      <img
                        src="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="draft_picture"
                        width="60px"
                        height={"60px"}
                        className="image_dropdown_navbar object-fit-cover"
                      />

                      <div>
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="fw-semibold m-0">Giulia</h5>
                          <p className="text-secondary text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <Link to={"/profile/660bbfaea281d80019a3ec4d"}>
                      <Button className="w-100 p-0  rounded-pill bg-transparent text-primary" size="sm">
                        Visualizza Profilo
                      </Button>
                    </Link>
                  </ListGroup.Item>

                  {/*/////////////// PROFILO PHILIP ///////////////*/}
                  <ListGroup.Item className="border-0">
                    <div className=" d-flex align-items-start gap-2">
                      <img
                        src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="draft_picture"
                        width="60px"
                        height={"60px"}
                        className="image_dropdown_navbar object-fit-cover"
                      />

                      <div>
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="fw-semibold m-0">Philip</h5>
                          <p className="text-secondary text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <Link to={"/profile/660d69e2f94f4a00193791f1"}>
                      <Button className="w-100 p-0  rounded-pill bg-transparent text-primary" size="sm">
                        Visualizza Profilo
                      </Button>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>

          {/* OFFCANVAS */}
          <div className="d-flex flex-column align-items-center netNav">
            <Button variant="trasparent" onClick={handleShow} className="me-2">
              <div>
                <img src="/icons/per-le-aziende.svg" alt="" />
                <p className="navbar-top text-nowrap">
                  Per le Aziende <img src="/icons/svgexport-79.svg" alt="dropdown-button" />
                </p>
              </div>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="rounded">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Per le aziende</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <div className="border border-1 rounded ">
                  <div className="border-bottom border-1 p-3">Scopri altri prodotti LinkedIn</div>
                  <Row>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/learning.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Learning</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/talent-insight.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Talent Insight</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/pub-off-lav.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Pubblica un'offerta di lavoro</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/pubblicizza.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Pubblicizza</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/trova-lead.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Trova Lead</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/gruppi.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Gruppi</p>
                      </div>
                    </Col>
                    <Col xs={3} className="mt-3">
                      <div className="text-center">
                        <img src="/icons/marketplace.svg" className="border border-1 rounded" alt="" />
                        <p className="text-sm text-secondary ">Marketplace</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="border border-1 rounded ">
                  <div className="border-bottom border-1 p-3">Scopri altro per il business</div>
                  <div className="px-3 border-bottom border-1">
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Assumi su Linkedin</p>
                      <p className="m-0 text-secondary text-sm">Trova, attrai e assumi</p>
                    </Button>
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Vendi su Linkedin</p>
                      <p className="m-0 text-secondary text-sm">Sblocca nuove opportunità di vendita</p>
                    </Button>
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Offerta di lavoro gratuita</p>
                      <p className="m-0 text-secondary text-sm">
                        Raggiungi i migliori candidati con la tua offerta di lavoro
                      </p>
                    </Button>
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Fai pubblicità su LinkedIn</p>
                      <p className="m-0 text-secondary text-sm">Acquisisci clienti e fai crescere la tua azienda</p>
                    </Button>
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Impara con LinkedIn</p>
                      <p className="m-0 text-secondary text-sm">Assumi su LinkedIn</p>
                    </Button>
                    <Button className="w-100 text-start bg-transparent border-0">
                      <p className="m-0 text-dark">Centro amministrazione</p>
                      <p className="m-0 text-secondary text-sm">Gestisci i dettagli di fatturazione e account</p>
                    </Button>
                  </div>
                  <Button className="w-100 text-start bg-transparent border-0 py-0">
                    <p className="m-0 text-dark p-3">
                      Crea una pagina aziendale <img src="/icons/plus.svg" alt="" />
                    </p>
                  </Button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="d-flex flex-column align-items-center">
            <a href="#login" className="premium text-nowrap text-center">
              Prova Premium per <br />0 EUR
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
