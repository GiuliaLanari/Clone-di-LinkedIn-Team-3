import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Button, DropdownDivider, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  return (
    <Navbar expand="lg" id="navbar" className="bg-white sticky-lg-top border-bottom py-0 pt-1 mb-3">
      <Container>
        <div className="d-flex">
          <NavbarBrand href="/" className="linkedin logo">
            <Col className="d-flex flex-row">
              <span className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="#0A66C2"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </span>
              <span>
                <Form>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    width={60}
                    className="bg border-1 px-3 py-1 fs-6"
                    placeholder="Cerca"
                  />
                </Form>
              </span>
            </Col>
          </NavbarBrand>
        </div>
        <div className="d-flex justify-content-end-lg align-items-center ">
          <Link to={"/home/" + user._id}>
            <div className="d-flex flex-column align-items-center bord text-decoration-none">
              <div className="d-flex flex-column align-items-center bord text-decoration-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"
                    fillOpacity="0.6"
                    fill="#000000"
                  ></path>
                </svg>
                <p className="navbar-top">Home</p>
              </div>
            </div>
          </Link>
          <div className="d-flex flex-column align-items-center bord text-decoration-none">
            {/* Network */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                fillOpacity="0.6"
                fill="#000000"
              ></path>
            </svg>
            <p className=" navbar-top fs-12">Rete</p>
          </div>

          <div className="d-flex flex-column align-items-center bord text-decoration-none">
            {/* Jobs */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
                fillOpacity="0.6"
                fill="#000000"
              ></path>
            </svg>
            <p className="navbar-top fs-12">Jobs</p>
          </div>
          <div className="d-flex flex-column  align-items-center bord">
            {/* Messaging */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
                fillOpacity="0.6"
                fill="#000000"
              ></path>
            </svg>
            <p className="navbar-top fs-12">Messaggi</p>
          </div>
          <div className="d-flex flex-column align-items-center bord">
            {/* Notifiche */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
                fillOpacity="0.6"
                fill="#000000"
              ></path>
            </svg>
            <p className="navbar-top fs-12">Notifiche</p>
          </div>
          <div className="text-decoration-none d-flex flex-column  align-items-center  bord me-4">
            <span>
              <img className="rounded-circle shadow-4-strong resized-avatar" alt="user" src={user.image} />
            </span>
            {/* Profile */}

            <div className="d-flex flex-column  align-items-center  bord">
              <Dropdown className="d-flex justify-content-center">
                <Dropdown.Toggle className="bg-white border-0 p-0 d-flex align-items-center dropdown-toggle-remove">
                  <span className="navbar-top fs-12">Tu</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <ListGroup className="mb-2">
                    <ListGroup.Item className="border-bottom-0">
                      <div className="d-flex align-items-start gap-2">
                        <img
                          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="draft_picture"
                          width="60px"
                          height={"60px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />

                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <h5 className="fw-semibold m-0">Philip</h5>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="text-secondary m-1 ms-3">Full Stack Developer</p>
                          </div>
                          <Link to={"/profile/660d69e2f94f4a00193791f1"}>
                            <Button className="d-flex align-items-center mt-1 rounded-4 " size="sm">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <DropdownDivider />
                      <div className="d-flex align-items-start gap-2">
                        <img
                          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="draft_picture"
                          width="60px"
                          height={"60px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />

                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <h5 className="fw-semibold m-0">Innocenzo</h5>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="text-secondary m-1 ms-3">Full Stack Developer</p>
                          </div>
                          <Link to={"/profile/660e54b613df0a001949f3df"}>
                            <Button className="d-flex align-items-center mt-1 rounded-4 " size="sm">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <DropdownDivider />
                      <div className="d-flex align-items-start gap-2">
                        <img
                          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="draft_picture"
                          width="60px"
                          height={"60px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />

                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <h5 className="fw-semibold m-0">Mia</h5>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="text-secondary m-1 ms-3">Full Stack Developer</p>
                          </div>
                          <Link to={"/profile/660bbe01a281d80019a3ec48"}>
                            <Button className="d-flex align-items-center mt-1 rounded-4 " size="sm">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <DropdownDivider />
                      <div className="d-flex align-items-start gap-2">
                        <img
                          src="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="draft_picture"
                          width="60px"
                          height={"60px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />

                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <h5 className="fw-semibold m-0">Giulia</h5>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="text-secondary m-1 ms-3">Full Stack Developer</p>
                          </div>
                          <Link to={"/profile/660bbfaea281d80019a3ec4d"}>
                            <Button className="d-flex align-items-center mt-1 rounded-4 " size="sm">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <DropdownDivider />
                      <div className="d-flex align-items-start gap-2">
                        <img
                          src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="draft_picture"
                          width="60px"
                          height={"60px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />

                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <h5 className="fw-semibold m-0">Simone</h5>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="text-secondary m-1 ms-3">Full Stack Developer</p>
                          </div>
                          <Link to={"/profile/660bbe39a281d80019a3ec49"}>
                            <Button className="d-flex align-items-center mt-1 rounded-4 " size="sm">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center netNav">
            <Button variant="trasparent" onClick={handleShow}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"
                    fillOpacity="0.6"
                    fill="#000000"
                  ></path>
                </svg>
                <p className="navbar-top text-nowrap">
                  Per le Aziende <img src="/icons/svgexport-79.svg" alt="dropdown-button" />
                </p>
              </div>
            </Button>
            <Modal size="md" className="modale" show={show} onHide={handleClose} dialogClassName="modal-dialog-right">
              <Modal.Header closeButton className="modalsize">
                <Modal.Title className="ms-2 aziende">Per le aziende</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalsize bodysize">
                <div className="border rounded-4 bg bg-white">
                  <div className="mt-2">
                    <h6 className="ms-4 py-2">Scopri altri prodotti LinkedIn</h6>
                    <hr />
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="mb-4 div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Pubblica un offerta di lavoro</p>
                    </div>
                    <div className="mb-4 div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-1 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          fill="#0a66c2"
                          className="bi bi-play-btn"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Learning</p>
                    </div>
                    <div className="mb-4 div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-clipboard-data"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Talent Insights</p>
                    </div>

                    <div className="mb-4 div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-bullseye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Pubblicizza</p>
                    </div>
                    <div className="div-pointer div-width text-center mb-3 mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-compass"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Trova nuovi clienti</p>
                    </div>
                    <div className="div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-people"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Gruppi</p>
                    </div>
                    <div className="div-pointer div-width text-center mx-4">
                      <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="#0a66c2"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                      </div>
                      <p className="modalp text-secondary">Marketplace dei servizi</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-4 bg bg-white">
                  <div className="mt-2">
                    <h6 className="ms-4 py-2">Scopri altro per il business</h6>
                    <hr />
                  </div>
                  <div>
                    <div className="ms-3 lineh text-black">
                      <h6>Assumi su LinkedIn</h6>
                      <p className="modalp2">Trova, attrai e assumi</p>
                    </div>
                    <div className="ms-3 lineh text-black">
                      <h6>Vendi con LinkedIn</h6>
                      <p className="modalp2">Sblocca nuove opportunità di vendita</p>
                    </div>
                    <div className="ms-3 lineh text-black">
                      <h6>Offerta di lavoro gratuita</h6>
                      <p className="modalp2">Ottieni rapidamente candidati qualificati</p>
                    </div>
                    <div className="ms-3 lineh text-black">
                      <h6>Fai pubblicità su LinkedIn</h6>
                      <p className="modalp2">Acquisisci clienti e fai crescere la tua azienda</p>
                    </div>
                    <div className="ms-3 lineh text-black">
                      <h6>Impara con LinkedIn</h6>
                      <p className="modalp2">Corsi per formare i tuoi dipendenti</p>
                    </div>
                    <div className="ms-3 lineh text-black">
                      <h6>Centro amministrazione</h6>
                      <p className="modalp2">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                    <hr />
                  </div>
                  <div className="d-flex align-items-center ms-3 mb-2 text-white">
                    <h6 className="me-2">Crea una pagina aziendale</h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
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
