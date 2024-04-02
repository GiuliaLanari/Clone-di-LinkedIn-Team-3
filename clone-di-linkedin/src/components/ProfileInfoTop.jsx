import EditProfileForm from "./EditProfileForm";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProfileInfoTop = () => {
  return (
    <div id="profile-container">
      <div id="banner">
        <button className="profile-picture"></button>
        <div className=" d-flex justify-content-end">
          <button className="m-3 add-banner border-0 rounded-circle">
            <img src="icons/camera.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <EditProfileForm />
        </div>
        <div className="px-4">
          <div>
            <h5>Nome Cognome</h5>
            <p>Titolo</p>
            <span className="fw-light">Città, Regione, Nazione</span> &#183;
            <span className="text-primary fw-bold"> Informazioni di contatto</span>
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

          <Carousel className="my-3" slide={false}>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-secondary col-5">
                  <h6>Dove lavori attualmente?</h6>
                  <p>
                    Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più
                    visualizzazioni del profilo.
                  </p>
                </Col>
                <Col className="border border-secondary col-5">
                  <h6>Aggiungi competenze collegate alla tua esperienza</h6>
                  <p>
                    Distinguiti come professionista aggiungendo le tue competenze principali e le tue particolari
                    capacità.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-secondary col-5">
                  <h6>In quale settore lavori?</h6>
                  <p>Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.</p>
                </Col>
                <Col className="border border-secondary col-5">
                  <h6>Quale scuola o università hai frequentato?</h6>
                  <p>
                    Gli utenti che includono una scuola o università ricevono fino a 2,2 volte più visualizzazioni del
                    profilo.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-evenly">
                <Col className="border border-secondary col-5">
                  <h6>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</h6>
                  <p>
                    Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                  </p>
                </Col>
                <Col className="border border-secondary col-5">
                  <h6>Disponibile a lavorare</h6>
                  <p>Ruoli per il tuo settore</p>
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
