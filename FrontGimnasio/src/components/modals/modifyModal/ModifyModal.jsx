import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";


const ModifyModal = ({ show, onHide, onModify, routine }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    if (routine) {
      setName(routine.name);
      setDuration(routine.duration);
      setDifficulty(routine.difficulty);
    }
  }, [routine]);

  const handleModify = async () => { 
    if (routine) {
      const updatedRoutine = {
        name,
        duration: parseInt(duration, 10), 
        difficulty,
        exercisesId: routine.exercisesId, 
      };

      console.log("Updated routine object:", updatedRoutine);

      try {
        const response = await fetch(`https://localhost:7067/api/Routine/UpdateRoutine/${routine.routineId}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRoutine),
        });

        console.log("Response status:", response.status);
        console.log("Response body:", await response.text());

        if (!response.ok) {
          throw new Error("Error al modificar la rutina");
        }

        onModify(updatedRoutine);

        onHide();
      } catch (error) {
        console.error("Error al modificar la rutina:", error);
      }
    }
  };

  const handleSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Rutina</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{ color: "black" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>
              Duración (minutos)
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              style={{ color: "black" }}
            />
          </Form.Group>
     
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleModify}>
          Modificar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModifyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  routine: PropTypes.shape({
    routineId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    exercisesId: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default ModifyModal;