import { Card, Col, Container, Row } from "react-bootstrap";
import "./cardDetails.css";
import data from "../../assets/disorders.json";

const CardDetails = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {data && (
              <Card className="bg-dark text-white">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
