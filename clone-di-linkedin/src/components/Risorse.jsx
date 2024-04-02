import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Risorse = function () {
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div>
          <h3 className="mb-0">Risorse</h3>
          <div className="d-flex align-items-center">
            <img src="icons/eye.svg" alt="" /> <p className="mb-0 ms-2">Solo per te</p>
          </div>
        </div>

        <Row className=" mt-2 analisis-desc ">
          <ul>
            <li className="me-4">
              <div className="d-flex gap-2">
                <div>
                  <img src="icons/satellite-dish.svg" alt="" />
                </div>
                <div className="p-0">
                  <h6 className="mb-0">
                    Modalità creazione di contenuti <Badge className="my-badge">No</Badge>
                  </h6>
                  <p className="mb-0">
                    Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
                  </p>
                </div>
              </div>
            </li>
            <hr />
            <li className="me-4">
              <div className="d-flex gap-2">
                <div>
                  <img src="icons/people.svg" alt="" />
                </div>
                <div className="p-0">
                  <h6 className="mb-0">La mia rete</h6>
                  <p className="mb-0">Salva e gestisci i tuoi collegamenti e interessi.</p>
                </div>
              </div>
            </li>
          </ul>
        </Row>
      </Col>

      <Button className="btn-border rounded-0 text-black">
        Mostra tutte le Risorse <img src="icons/right-arrow.svg" alt="" />
      </Button>
    </Row>
  );
};

export default Risorse;
