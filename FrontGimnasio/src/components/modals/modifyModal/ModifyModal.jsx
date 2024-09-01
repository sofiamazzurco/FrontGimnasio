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

  const handleModify = () => {
    if (routine) {
      const updatedRoutine = {
        routineId: routine.routineId,
        name,
        duration,
        difficulty,
        exercisesId: routine.exercisesId,
      };
      onModify(updatedRoutine);
    }
    onHide();
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
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black" }}>Dificultad</Form.Label>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                difficulty === "0"
                  ? "Baja"
                  : difficulty === "1"
                  ? "Media"
                  : difficulty === "2"
                  ? "Alta"
                  : "Modificar dificultad"
              }
              onSelect={handleSelectDifficulty}
            >
              <Dropdown.Item eventKey="0">Baja</Dropdown.Item>
              <Dropdown.Item eventKey="1">Media</Dropdown.Item>
              <Dropdown.Item eventKey="2">Alta</Dropdown.Item>
            </DropdownButton>
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
    difficulty: PropTypes.string.isRequired,
    exercisesId: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default ModifyModal;
