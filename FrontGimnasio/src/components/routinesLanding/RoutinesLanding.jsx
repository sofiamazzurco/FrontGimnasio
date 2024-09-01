import { Container, Row, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import ModifyModal from "../modals/modifyModal/ModifyModal";
import DeleteModal from "../modals/deleteModal/DeleteModal";
import CreateModal from "../modals/createModal/CreateModal";
import { useState } from "react";

const RoutinesLanding = ({ routines, exercises, onDeleteRoutine}) => {
  // estados para modales
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);

  // estado para tener seguimiento del id de la rutina seleccionada a eliminar
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  
  const handleOpenDeleteModal = (routineId) => {
    setSelectedRoutineId(routineId); // seteo el id d la rutina a eliminar
    setShowDeleteModal(true);
  };
  

  const handleOpenModifyModal = (routineId) => {
    setSelectedRoutineId(routineId); //seteo el id de la rutina a modificar
    setShowModifyModal(true);
  };

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
        <Button
          variant="success"
          className="w-50"
          onClick={handleOpenCreateModal}
        >
          Agregar rutina ++
        </Button>
      </Container>
      <Container className="d-flex flex-wrap justify-content-center">
        {routines.map((routine) => (
          <Card
            key={routine.id}
            style={{
              backgroundColor: "black",
              marginBottom: "1rem",
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
                Duración: {routine.duration} min
              </Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>
                Dificultad:
                {routine.difficulty === 1
                  ? " Media "
                  : routine.difficulty === 2
                  ? " Alta "
                  : " Baja "}
              </Card.Text>
              <Card.Text style={{ color: "white", textAlign: "left" }}>
                Ejercicios:
                {routine.exercisesId.map((exerciseId) => {
                  const exercise = exercises.find((e) => e.id === exerciseId);
                  return exercise ? (
                    <div key={exercise.id}> * {exercise.name}</div>
                  ) : null;
                })}
              </Card.Text>
              <Button
                variant="danger"
                className="d-flex mt-2 w-100 justify-content-center"
                onClick={() => handleOpenDeleteModal(routine.routineId)}  
              >
                Eliminar rutina
              </Button>
              <Button
                className="d-flex mt-2 w-100 justify-content-center"
                onClick={() => handleOpenModifyModal(routine.routineId)} >
                Modificar rutina
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <ModifyModal show={showModifyModal} onHide={handleCloseModal} routineId={selectedRoutineId} />
      <CreateModal
        show={showCreateModal}
        onHide={handleCloseModal}
        exercises={exercises}
      />
      <DeleteModal
        show={showDeleteModal}
        onHide={handleCloseModal}
        onDelete={onDeleteRoutine} 
        routineId={selectedRoutineId}
      />
    </>
  );
};

RoutinesLanding.propTypes = {
  routines: PropTypes.array.isRequired,
  exercises: PropTypes.array.isRequired,
  onDeleteRoutine: PropTypes.func.isRequired
};

export default RoutinesLanding;
