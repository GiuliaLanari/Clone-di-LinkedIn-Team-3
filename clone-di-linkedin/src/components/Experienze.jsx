import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experiencesList } from "../redux/actions";
import { newExperienze } from "../redux/actions";
import { experiencesListDelete } from "../redux/actions";
import { RiDeleteBin5Fill } from "react-icons/ri";
import AddEsperienzaForm from "./AddEsperienzaForm";
import EditEsperienzaForm from "./EditEsperienzaForm";

const Experienze = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(experiencesList(experiences));
    dispatch(newExperienze(experiences));
  }, []);

  const experiences = useSelector((state) => state.experiences);
  const userId = useSelector((state) => state.user._id);
  return (
    <Row className="g-0">
      <Col className="analis-col">
        <div className="d-flex justify-content-between">
          <div className="act">
            <h3 className="mb-0">Esperienza</h3>
          </div>
          <div
            className="d-flex gap-3 align-items-baseline "
            variant="white"
            // onClick={() => {
            //   dispatch(experiencesListDelete(userId));
            // }}
          >
            <AddEsperienzaForm />
          </div>
        </div>

        <Row className=" mt-2 analisis-desc ">
          <Col xs={12}>
            {experiences.map((esperienza, i) => (
              <Row key={esperienza._id}>
                <Col xs={2}>
                  <img src={esperienza.image} alt="logo-school" className="w-100" />
                </Col>
                <Col xs={7}>
                  <h6 className="mb-0">{esperienza.company}</h6>
                  <p className="mb-0">{esperienza.role}</p>
                  <p className="mb-0">{esperienza.startDate}</p>
                </Col>
                <Col xs={3}>
                  <Row>
                    <Col xs={2}>
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(experiencesListDelete(esperienza._id, userId));
                        }}
                      >
                        <RiDeleteBin5Fill />
                      </Button>
                    </Col>
                    <Col xs={1} className="ms-3">
                      <EditEsperienzaForm />
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Col>

      <Button className="btn-border rounded-0 text-black">
        Mostra tutti i titoli di studio ( {experiences.length} )
        <img src="icons/right-arrow.svg" alt="freccia" />
      </Button>
    </Row>
  );
};

export default Experienze;
