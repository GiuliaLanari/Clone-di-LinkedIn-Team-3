import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RightBar = function () {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Row className="mb-5">
      <Col>
        <Col xs={12} className="news-container-tot px-0 rounded-3 border border-1">
          <div className="d-flex align-items-center justify-content-between px-3">
            <h6 className="mb-0">LinkedIn Notizie</h6>
            <img src="/icons/i.svg" alt="" />
          </div>
          <div className="news-container">
            <ul>
              <li>
                <div>
                  <span className="span-list-point"></span>
                  Quali confini tra vita e lavoro
                </div>

                <p className="mb-1">Notizie principali</p>
              </li>
              <li>
                <div>
                  <span className="span-list-point"></span>
                  L'età dell'oro della discografia{" "}
                </div>
                <p className="mb-1">5 giorni fa</p>
              </li>
              <li>
                <div>
                  {" "}
                  <span className="span-list-point"></span>
                  Lamborghini ritocca il logo{" "}
                </div>
                <p className="mb-1">1 giorno fa</p>
              </li>
              <li>
                <div>
                  <span className="span-list-point"></span>
                  Worldpay integra Satispay
                </div>
                <p className="mb-1">16 ore fa</p>
              </li>
              <li>
                <div>
                  <span className="span-list-point"></span>
                  Private equity in frenata{" "}
                </div>
                <p className="mb-1">5 giorni fa</p>
              </li>
              <div className={`mt-2 drop-open-width ${clicked ? "d-none" : "d-block"}`}>
                <div className="rounded-1 drop-nasc">
                  <span onClick={handleClick}>
                    {!clicked && (
                      <div className="più-meno-dettagli">
                        Vedi altro <img src="/icons/bottom-arrow.svg" alt="" />
                      </div>
                    )}
                  </span>
                </div>
              </div>

              {clicked && (
                <div>
                  <li>
                    <div>
                      <span className="span-list-point"></span>
                      Esercizi per collaborare meglio
                    </div>
                    <p className="mb-1">1 giorno fa</p>
                  </li>
                  <li>
                    <div>
                      <span className="span-list-point"></span>
                      Più sfide per la cybersicurezza
                    </div>
                    <p className="mb-1">5 giorni fa</p>
                  </li>
                  <li>
                    <div>
                      <span className="span-list-point"></span>
                      Chi è il nuovo ceo di NTT Data Italia
                    </div>
                    <p className="mb-1">1 ora fa</p>
                  </li>
                  <li>
                    <div>
                      <span className="span-list-point"></span>
                      EY potenzia la consulenza tecnologica
                    </div>
                    <p className="mb-1">1 giorno fa</p>
                  </li>
                  <li>
                    <div>
                      <span className="span-list-point"></span>
                      Nexi e Bancomat fanno squadra
                    </div>
                    <p className="mb-1">17 ore fa</p>
                  </li>
                  <div className="mt-2 drop-nasc-width">
                    <div className="rounded-1 drop-nasc">
                      <span onClick={handleClick} className="più-meno-dettagli">
                        <div className="più-meno-dettagli">
                          Meno dettagli <img src="/icons/top-arrow.svg" alt="" />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </Col>
        <Row className="sticky-footer">
          <Col xs={12}>
            <div>
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                className="w-100 py-2 rounded-4"
                alt="linkedin"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <ul className="d-flex footer-home-list">
                <li>
                  <a href="#i">Informazioni</a>
                </li>
                <li>
                  <a href="#i">Accessibilità</a>
                </li>
                <li>
                  <a href="#i">Centro assistenza</a>
                </li>
                <li>
                  <a href="#i">Privacy e condizioni</a>
                </li>
                <li>
                  <a href="#i">Opzioni per gli annunci pubblicitari</a>
                </li>
                <li>
                  <a href="#i">Pubblicità</a>
                </li>
                <li>
                  <a href="#i">Servizi alle aziende</a>
                </li>
                <li>
                  <a href="#i">Scarica l'app LinkedIn</a>
                </li>
                <li>
                  <a href="#i">Altro</a>
                </li>
              </ul>
            </div>
            <div className="footer-copy d-flex justify-content-center mt-2">
              <img className="me-1" src="/icons/linkedin-logo.svg" alt="" />
              LinkedIn Corporation &copy; 2024
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default RightBar;
