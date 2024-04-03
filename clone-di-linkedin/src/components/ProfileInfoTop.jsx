import EditProfileForm from "./EditProfileForm";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getUser } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileInfoTop = () => {
  const dispatch = useDispatch();
  const [slide, setSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = function () {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeWidth);

    return () => window.removeEventListener("resize", resizeWidth);
  }, []);

  const next = () => {
    if (windowWidth <= 768) {
      setSlide((prevValue) => prevValue - 104);
    } else if (windowWidth <= 992) {
      setSlide((prevValue) => prevValue - 73);
    } else {
      setSlide((prevValue) => prevValue - 25);
    }
  };

  const prev = () => {
    if (windowWidth <= 768) {
      setSlide((prevValue) => prevValue + 104);
    } else if (windowWidth <= 992) {
      setSlide((prevValue) => prevValue + 73);
    } else {
      setSlide((prevValue) => prevValue + 25);
    }
  };

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
            <img src="icons/camera.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <EditProfileForm />
        </div>
        <div>
          <div className="analis-col pt-2">
            <h5>
              {userData.name} {userData.surname}
            </h5>
            <p></p>
            <span className="fw-light">{userData.area}</span> &#183;
            <span className="text-primary fw-bold">Informazioni di contatto</span>
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

          {/* <Carousel className="my-3" interval={null} slide={false}>
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
          </Carousel> */}
          <section>
            <div>
              <div interval={null} className=" my-carousel">
                <div className="overflow-hidden carousel-overflow">
                  <Button
                    onClick={prev}
                    disabled={slide === 0}
                    className="prev-btn prev-btn-top btn-dark rounded-circle"
                  >
                    <img src="icons/prev-btn.svg" alt="" />
                  </Button>
                  <Row
                    className=" gap-3 flex-nowrap"
                    style={{
                      transform: `translateX(${slide}%)`,
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <Col xs={5} className="cons-pad-top rounded-3 border border-1">
                      <div className="x-button">
                        <button className="btn p-2">
                          <img src={"icons/X.svg"} alt="" />
                        </button>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="fw-medium">Mostra ai recruiter che sei disponibile a lavorare:</span> sei tu
                          che decidi chi può vedere questa informazione.
                        </p>
                      </div>
                      <div>
                        <p className="mb-0"></p>
                      </div>
                      <div>
                        <a href="#i">Inizia</a>
                      </div>
                    </Col>

                    <Col xs={5} className="cons-pad-top rounded-3  border border-1">
                      <div className="x-button">
                        <button className="btn p-2">
                          <img src={"icons/X.svg"} alt="" />
                        </button>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="fw-medium">Fai sapere che stai facendo selezione</span> e attrai candidati
                          qualificati.
                        </p>
                      </div>

                      <div>
                        <a href="#i">Inizia</a>
                      </div>
                    </Col>

                    <Col xs={5} className="cons-pad-top rounded-3  border border-1">
                      <div className="x-button">
                        <button className="btn p-2">
                          <img src={"icons/X.svg"} alt="" />
                        </button>
                      </div>

                      <div>
                        <p className="mb-0">
                          <span className="fw-medium">Metti in risalto i tuoi servizi</span> in un'apposita sezione sul
                          tuo profilo, così sarà più facile trovarti.
                        </p>
                      </div>
                      <div>
                        <a href="#i">Inizia</a>
                      </div>
                    </Col>
                    <Col xs={5} className="cons-pad-top rounded-3  border border-1">
                      <div className="x-button">
                        <button className="btn p-2">
                          <img src={"icons/X.svg"} alt="" />
                        </button>
                      </div>
                      <div>
                        <p className="mb-0">Quale scuola o università hai frequentato?</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          Gli utenti che includono una scuola o università ricevono fino a 2,2 volte più visualizzazioni
                          del profilo.
                        </p>
                      </div>
                    </Col>

                    <Col xs={5} className="cons-pad-top rounded-3  border border-1">
                      <div className="x-button">
                        <button className="btn p-2">
                          <img src={"icons/X.svg"} alt="" />
                        </button>
                      </div>
                      <div>
                        <p className="mb-0">Disponibile a lavorare</p>
                      </div>
                      <div>
                        <p className="mb-0">Ruoli per il tuo settore</p>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    onClick={next}
                    disabled={slide === -130 || slide === -365 || slide === -520}
                    className="next-btn next-btn-top btn-dark rounded-circle"
                  >
                    <img src="icons/next-btn.svg" alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfoTop;
