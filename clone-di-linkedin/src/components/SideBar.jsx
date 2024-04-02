import ListGroup from "react-bootstrap/ListGroup";
import Fetch from "./Fetch";

const SideBar = function () {
  return (
    <>
      <ListGroup className="rounded-3">
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mt-2">Lingua del profilo</h6>
            <div>
              <img width="24px" src="icons/svgexport-10.svg" alt="edit" />
            </div>
          </div>
          <span className="text-secondary">Italiano</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mt-2">Profilo pubblico e URL</h6>
            <div>
              <img width="24px" src="icons/svgexport-10.svg" alt="edit" />
            </div>
          </div>
          <span className="text-secondary">www.linkedin.com/in/simone-criscenti-b49272237</span>
        </ListGroup.Item>
      </ListGroup>
      <img
        src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        className="w-100 py-2 rounded-4"
        alt="linkedin"
      />
      <ListGroup className="mb-2">
        <ListGroup.Item className="border-bottom-0">
          <h6 className="m-0 mt-2">Altri profili simili</h6>
        </ListGroup.Item>

        <Fetch />
      </ListGroup>
      <ListGroup>
        <ListGroup.Item className="border-bottom-0">
          <h6 className="m-0 mt-2">Persone che potresti conoscere</h6>
        </ListGroup.Item>

        <Fetch />
      </ListGroup>
    </>
  );
};

export default SideBar;
