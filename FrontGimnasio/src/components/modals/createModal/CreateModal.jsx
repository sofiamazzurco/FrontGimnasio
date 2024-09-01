import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


const CreateModal = ({ show, onHide, addRutine, nextId, exercises }) => {
  const [nombre, setNombre] = useState("");
  const [ejercicios, setEjercicios] = useState([]);

  const changeNombreHandler = (event) => setNombre(event.target.value);

  const toggleEjercicio = (exercise) => {
    if (ejercicios.some(e => e.id === exercise.id)) {
      setEjercicios(ejercicios.filter(e => e.id !== exercise.id));
    } else {
      setEjercicios([...ejercicios, exercise]);
    }
  };

  const handleSubmit = () => {
    const newRutina = {
      id: nextId,
      nombre,
      ejercicios,
    };

    console.log('New rutina:', newRutina);

    addRutine(newRutina);
    setNombre("");
    setEjercicios([]);
    onHide();
    setTimeout(() => {
      alert("Se registró la rutina exitosamente!!");
    }, 200);
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nueva rutina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de Rutina</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Rutina de pecho"
                value={nombre}
                onChange={changeNombreHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createForm.ControlInput2">
              <Form.Label>Seleccione la dificultad</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Alta"
                    name="difficulty"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Media"
                    name="difficulty"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Baja"
                    name="difficulty"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Seleccione las actividades:</Form.Label>
              {exercises.map((exercise) => (
                <Form.Check
                  key={exercise.id}
                  type="checkbox"
                  id={`exercise-${exercise.id}`}
                  label={exercise.name}
                  checked={ejercicios.some(e => e.id === exercise.id)}
                  onChange={() => toggleEjercicio(exercise)}
                />
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CreateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addRutine: PropTypes.func.isRequired,
  nextId: PropTypes.number.isRequired,
};

export default CreateModal;
