import EditProfileForm from "./EditProfileForm";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getUser } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileInfoTop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userData));
  }, []);
  const userData = useSelector((state) => state.user);
  console.log(userData);

  return (
    <div id="profile-container" className="rounded-3 bg-white">
      <div id="banner" className="rounded-top-3">
        <button className="profile-picture">
          <img src={userData.image} className="img-fluid" style={{ width: "170px", borderRadius: "50%" }} alt="" />
        </button>
        <div className=" d-flex justify-content-end">
          <button className="m-3 add-banner border-0 rounded-circle">
            <img src="icons/camera.svg" className="mb-1" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <EditProfileForm />
        </div>
        <div className="px-4">
          <div>
            <h3 className="mb-0">
              {userData.name} {userData.surname}
            </h3>
            <p className="h6 fw-normal mb-1">{userData.title}</p>
            <span className="fw-light">{userData.area}</span> &#183;{" "}
            <span className="text-primary">
              <a href="/">Informazioni di contatto</a>{" "}
            </span>
            <div>
              <button className="border-0 rounded-pill bg-primary text-white fw-bold me-2 px-3 py-1">
                Disponibile per
              </button>
              <button className="border border-primary border-2 rounded-pill text-primary fw-bold me-2 px-3 py-1">
                Aggiungi sezione del profilo
              </button>
              <button className="border-2 rounded-pill fw-bold me-2 px-3 py-1">Altro</button>
            </div>
          </div>

          <Carousel className="my-3" interval={null} slide={false}>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-2 border-light col-5 rounded-3">
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">Dove lavori attualmente?</h6>
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">
                    Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più
                    visualizzazioni del profilo.
                  </p>
                </Col>
                <Col className="border border-2 border-light col-5 rounded-3">
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">Aggiungi competenze collegate alla tua esperienza</h6>
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">
                    Distinguiti come professionista aggiungendo le tue competenze principali e le tue particolari
                    capacità.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-2 border-light col-5 rounded-3" style={{ backgroundColor: "#DDE7F1" }}>
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">In quale settore lavori?</h6>{" "}
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">
                    Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.
                  </p>
                </Col>
                <Col className="border border-2 border-light col-5 rounded-3">
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">Quale scuola o università hai frequentato?</h6>{" "}
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">
                    Gli utenti che includono una scuola o università ricevono fino a 2,2 volte più visualizzazioni del
                    profilo.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-2 border-light col-5 rounded-3">
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">
                      Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
                    </h6>
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">
                    Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                  </p>
                </Col>
                <Col className="border border-2 border-light col-5 rounded-3">
                  <span className="d-flex justify-content-between">
                    <h6 className="pt-2">Disponibile a lavorare</h6>
                    <button className="border-0 bg-transparent rounded-circle">
                      <img src="icons/X.svg" alt="close" />
                    </button>
                  </span>
                  <p className="carousel-text">Ruoli per il tuo settore</p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfoTop;
