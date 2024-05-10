import { Card } from "react-bootstrap"; // Importing necessary components from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./card.css";
import { Link } from "react-router-dom";
export function SingleCard({ onClick, id, img, title }) {
  return (
    <Card
      key={id}
      id={id}
      className={`group relative shadow mb-4 h-100`}
      onClick={onClick}
    >
      <img src={"../../Screenshot 2024-05-02 at 18-21-08 Abbraccio.png"} />
      <Card.Img
        className="ratio ratio-1x1"
        variant="top"
        src={img}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/detail/${id}`}> Detail </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
