import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Analisis = function () {
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div>
          <h3 className="mb-0">Analisi</h3>
          <div className="d-flex align-items-center">
            <img src="icons/eye.svg" alt="" /> <p className="mb-0 ms-2">Solo per te</p>
          </div>
        </div>

        <Row className="analisis-desc my-2">
          <ul className="d-flex">
            <li className="me-4">
              <div className="d-flex gap-2">
                <div>
                  <img src="icons/people.svg" alt="" />
                </div>
                <div className="p-0">
                  <h6 className="mb-0">0 visualizzazioni del profilo</h6>
                  <p className="mb-0">Aggiorna il tuo profilo per attrarre visitatori.</p>
                </div>
              </div>
            </li>

            <li className="me-4">
              <div className="d-flex gap-2">
                <div>
                  <img src="icons/people.svg" alt="" />
                </div>
                <div className="p-0">
                  <h6 className="mb-0">0 impressioni del post</h6>
                  <p className="mb-0">Crea un post per aumentare l'interesse.</p>
                  <p className="mb-0">Ultimi 7 giorni</p>
                </div>
              </div>
            </li>
          </ul>
        </Row>
      </Col>

      <Button className="btn-border rounded-0 text-black">
        Mostra tutte le analisi <img src="icons/right-arrow.svg" alt="" />
      </Button>
    </Row>
  );
};

export default Analisis;
