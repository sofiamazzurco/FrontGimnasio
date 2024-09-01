import { Container, Row, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import ModifyModal from "../modals/modifyModal/ModifyModal";
import DeleteModal from "../modals/deleteModal/DeleteModal";
import CreateModal from "../modals/createModal/CreateModal";
import { useState } from "react";

const RoutinesLanding = ({ routines }) => {
  // estados para modales
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleOpenDeleteModal = () => setShowDeleteModal(true);
  const handleOpenModifyModal = () => setShowModifyModal(true);

  // una unica funcion para cerrar todos
  const handleCloseModal = () => {
    setShowCreateModal(false);
    setShowDeleteModal(false);
    setShowModifyModal(false);
  };

  return (
    <>
      <h1
        style={{ color: "white" }}
        className="d-flex justify-content-center p-5"
      >
        Bienvenidos al Gym! 💪
      </h1>
      <h4
        className="mb-4 d-flex justify-content-center"
        style={{ color: "white" }}
      >
        Rutinas disponibles
      </h4>
      <Container className="d-flex justify-content-center mb-4">
        <Button variant="success" className="w-50" onClick={handleOpenCreateModal}>
          Agregar rutina ++
        </Button>
      </Container>
      <Container className="d-flex align-items-center">
        <Row className="flex-wrap">
          {routines.map((routine) => (
            <Card
              key={routine.id}
              style={{
                backgroundColor: "black",
                marginBottom: "1rem",
                width: "18rem",
                margin: "10px",
              }}
            >
              <Card.Title style={{ color: "white", padding: "10px" }}>
                {routine.name}
              </Card.Title>
              <Card.Img
                variant="top"
                src="https://media.gq.com.mx/photos/617ae3f569b0d2ef94390330/1:1/w_2000,h_2000,c_limit/GettyImages-1305421105.jpg"
                width="100px"
                height="250px"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  Duración: {routine.duration}
                </Card.Text>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  Dificultad: {routine.difficulty}
                </Card.Text>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  - Puente de gluteo
                </Card.Text>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  - Sentadilla{" "}
                </Card.Text>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  - Abdominales
                </Card.Text>
                <Card.Text style={{ color: "white", textAlign: "left" }}>
                  - Estocada
                </Card.Text>
                <Button
                  variant="danger"
                  className="d-flex mt-3 w-100 justify-content-center"
                  onClick={handleOpenDeleteModal}
                >
                  Eliminar rutina
                </Button>
                <Button
                  className="d-flex mt-3 w-100 justify-content-center"
                  onClick={handleOpenModifyModal}
                >
                  Modificar rutina
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <ModifyModal show={showModifyModal} onHide={handleCloseModal} />
      <CreateModal show={showCreateModal} onHide={handleCloseModal} />
      <DeleteModal show={showDeleteModal} onHide={handleCloseModal} />
    </>
  );
};

RoutinesLanding.propTypes = {
  routines: PropTypes.array.isRequired,
};

export default RoutinesLanding;
