import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Analisis from "./Analisis";
import Risorse from "./Risorse";
import Activity from "./Activity";
import Training from "./Training";
import Interests from "./Interests";
import { useEffect, useState } from "react";

const ProfileInfoBottom = function () {
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

  return (
    <>
      <Col xs={12} id="analisis" className="rounded-3">
        <Row className="g-0">
          <Col>
            <div className="analis-col">
              <div className="mb-2">
                <h3 className="mb-0">Consigliato per te</h3>
                <div className="d-flex align-items-center">
                  <img src="icons/eye.svg" alt="" /> <p className="mb-0 ms-2">Solo per te</p>
                </div>
              </div>

              <h6 className="mb-0">Intermedio</h6>
              <div className="d-flex gap-2 align-items-center">
                <div className="w-100">
                  <div className="line-div rounded-end">
                    <div className="not-line-div rounded-start"></div>
                  </div>
                </div>
                <span>4/7</span>
              </div>

              <p>
                Completa 3 passaggi per raggiungere il livello <a href="#i">Massimo</a>
              </p>
            </div>

            <section>
              <div>
                <div interval={null} className=" my-carousel">
                  <div className="overflow-hidden carousel-overflow">
                    <Button onClick={prev} disabled={slide === 0} className="prev-btn btn-dark rounded-circle">
                      <img src="icons/prev-btn.svg" alt="" />
                    </Button>
                    <Row
                      className=" gap-3 flex-nowrap"
                      style={{
                        transform: `translateX(${slide}%)`,
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <Col xs={5} className="cons-pad rounded-3 border border-1">
                        <div className="x-button">
                          <button className="btn p-2">
                            <img src={"icons/X.svg"} alt="" />
                          </button>
                        </div>
                        <div>
                          <h5>Dove lavori attualmente?</h5>
                        </div>
                        <div className="desc-flex">
                          <p>
                            Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più
                            visualizzazioni del profilo.
                          </p>
                          <div>
                            <Button className="rounded-pill dec-btn text-secondary btn-dark">Aggiungi Posizione</Button>
                          </div>
                        </div>
                      </Col>

                      <Col xs={5} className="cons-pad rounded-3 border border-1">
                        <div>
                          <h5>Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti</h5>
                        </div>
                        <div className="desc-flex">
                          <p>
                            Gli utenti con una foto del profilo ricevono fino a 2,3 volte più visualizzazioni del
                            profilo.
                          </p>
                          <div>
                            <Button className="rounded-pill dec-btn text-secondary btn-dark">Aggiungi foto</Button>
                          </div>
                        </div>
                      </Col>

                      <Col xs={6} className="cons-pad rounded-3 border border-1">
                        <div>
                          <h5>
                            Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza
                            lavorativa
                          </h5>
                        </div>
                        <div>
                          <p className="mb-2">
                            Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del
                            profilo.
                          </p>
                          <div>
                            <Button className="rounded-pill dec-btn text-secondary btn-dark">
                              Aggiungi un riepilogo
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      onClick={next}
                      disabled={slide === -50 || slide === -146 || slide === -208}
                      className="next-btn btn-dark rounded-circle"
                    >
                      <img src="icons/next-btn.svg" alt="" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Col>
      <Col xs={12} id="analisis" className="rounded-3">
        <section>
          <Analisis />
        </section>
      </Col>
      <Col xs={12} id="analisis" className="rounded-3">
        <section>
          <Risorse />
        </section>
      </Col>
      <Col xs={12} id="analisis" className="rounded-3">
        <section>
          <Activity />
        </section>
      </Col>
      <Col xs={12} id="analisis" className="rounded-3">
        <section>
          <Training />
        </section>
      </Col>
      <Col xs={12} id="analisis" className="rounded-3">
        <section>
          <Interests />
        </section>
      </Col>
    </>
  );
};

export default ProfileInfoBottom;
