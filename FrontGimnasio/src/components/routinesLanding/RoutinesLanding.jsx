import { Card, Container, Row, Button } from "react-bootstrap";

const RoutinesLanding = () => {
  return (
    <>
      <h1 style={{color: "white"}} className="d-flex justify-content-center p-5">Bienvenidos al Gym! 💪</h1>
      <h4 className="mb-4 d-flex justify-content-center" style={{color: "white"}}>Rutinas disponibles</h4>
      <Container className="d-flex justify-content-center mb-4">
        <Button variant="success" className="w-50">Agregar rutina ++</Button>
      </Container>
      <Container className="d-flex align-items-center">
        <Row className="flex-wrap">
          <Card style={{ backgroundColor: "black" ,marginBottom: "1rem", width: "18rem"}}>
            <Card.Title style={{ color: "white", padding: "10px" }}>
              Rutina 1
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://media.gq.com.mx/photos/617ae3f569b0d2ef94390330/1:1/w_2000,h_2000,c_limit/GettyImages-1305421105.jpg"
              width="100px"
              height="250px"
              style={{objectFit: "cover"}}
              /> 
            <Card.Body>
              <Card.Text style={{ color: "white", textAlign: "left"}}>Duración: 40 min</Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>Dificultad: baja</Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>- Puente de gluteo</Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>- Sentadilla </Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>- Abdominales</Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>- Estocada</Card.Text> 
              <Button variant="danger" className="d-flex mt-3 w-100 justify-content-center">Eliminar rutina</Button>
              <Button className="d-flex mt-3 w-100 justify-content-center">Modificar rutina</Button> 
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

// DATOS A MODO DE EJEMPLO, DEBEN RELLENARSE CON DATA DEL BACK

// los datos del nombre de rutina, duracion y etc deberia llenarse de los datos del back (fetcheo)

export default RoutinesLanding;
