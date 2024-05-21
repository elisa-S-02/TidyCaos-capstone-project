import { Card, Col, Container, Row } from "react-bootstrap";
import "./cardDetails.css";
import data from "../../assets/disorders.json";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const item = data.find((d) => d.id === parseInt(id));

  if (!item) {
    console.log(item);
    return (
      <div>
        <b>Item not found</b>
      </div>
    );
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            {item && (
              <Card className="bg-dark text-white" key={item.id}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
