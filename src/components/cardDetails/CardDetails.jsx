import { Card, Col, Container, Row } from "react-bootstrap";
import "./cardDetails.css";
import disorders from "../../assets/disorders.json";

const CardDetails = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {disorders && (
              <Card className="bg-dark text-white">
                <Card.Title>{disorders.name}</Card.Title>
                <Card.Text>{disorders.desc}</Card.Text>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
