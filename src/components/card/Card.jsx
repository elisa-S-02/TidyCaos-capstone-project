import { Card } from "react-bootstrap"; // Importing necessary components from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./card.css";
import { Link } from "react-router-dom";

const SingleCard = ({ id, title }) => {
  return (
    <Card id={id} className={`group relative shadow mb-4 h-100`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Link className="link" to={`/detail/${id}`}>
            Detail
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;
