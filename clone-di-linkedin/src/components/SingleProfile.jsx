import ListGroup from "react-bootstrap/ListGroup";
import { FaUserCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const SingleProfile = function ({ profile }) {
  return (
    <ListGroup.Item>
      <div className="d-flex gap-2">
        <FaUserCircle size={35} />
        <div>
          <div className="d-flex">
            <h6 className="m-0">{profile.name}</h6>
            <img width="20px" className="ms-2" src="icons/svgexport-41.svg" alt="" />
          </div>
          <div className="text-secondary">{profile.title}</div>
          <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1 mt-1 rounded-4">
            <img src="icons/svgexport-23.svg" alt="" />
            <span>Collegati</span>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default SingleProfile;
