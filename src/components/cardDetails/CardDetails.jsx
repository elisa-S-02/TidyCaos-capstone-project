import { Card, Col, Container, Row } from "react-bootstrap";
import "./cardDetails.css";
import data from "../../assets/disorders.json";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const item = data.find((d) => d.id === Number(id));

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
      <Row>
        <Col className="bordo">
          {item && (
            <Card className="bg-white " key={item.id}>
              <Card.Title className=" trasparente distance ">
                {item.name}
              </Card.Title>
              <Card.Text className=" trasparente ">{item.desc}</Card.Text>
              <p className=" trasparente citazione">
                {" "}
                "Lo stupido è chi non riconosce la propria ignoranza"
              </p>
              <a className=" trasparente distance" href={item.wiki}>
                per maggiori informazioni consulta liberamente la pagina
                dedicata
              </a>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};
export default CardDetails;
