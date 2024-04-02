
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Link from "react-bootstrap/Link";

const MyNavbar = () => {
    
    return (
        <Navbar fluid className="bg-white border-bottom sticky-top px-0">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col className="d-flex flex-row mt-1">
                        <span className="me-1 mt-1">
                            <img
                                src={"icons/LogoNav.png"}
                                width="35"
                                height="35"
                                alt="linkedinLogo"
                            />
                        </span>
                        <span>
                            <Form className="mt-1">
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" className="bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Cerca"
                                        aria-label="Cerca"
                                        aria-describedby="basic-addon1"
                                        width={60}
                                        style={{backgroundColor:"#EDF3F8"}}
                                    />
                                </InputGroup>
                            </Form>
                        </span>
                    </Col>

                    <Col className="d-flex flex-column  text-center g-0 border-bottom border-dark mt-2">
                        <span>
                            <Link className="text-decoration-none">

                            </Link>
                        </span>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;


