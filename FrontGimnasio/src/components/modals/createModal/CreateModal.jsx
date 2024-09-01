import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const CreateModal = ({ show, onHide, fetchRoutines }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [duration, setDuration] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [selectedExerciseId, setSelectedExerciseId] = useState('');
  const [exercisesId, setExercisesId] = useState([]);


  const fetchExercises = async () => {
    try {
      const response = await fetch("https://localhost:7067/api/Exercise/Get");
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.log("Error al solicitar ejercicios a la base de datos:", error);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleAddExercise = () => {
    if (!selectedExerciseId || exercisesId.includes(parseInt(selectedExerciseId))) {
      return;
    }

    const selectedExercise = exercises.find(exercise => exercise.id === parseInt(selectedExerciseId));
    const categoryCount = exercisesId.filter(id => {
      const exercise = exercises.find(e => e.id === id);
      return exercise && exercise.category === selectedExercise.category;
    }).length;

    if (categoryCount >= 3) {
     alert('No se pueden agregar más de 3 ejercicios de la misma categoría.');
      return;
    }

    const machinesCount = exercisesId.filter(id => {
      const exercise = exercises.find(e => e.id === id);
      return exercise && exercise.machineId !== null;
    }).length;

    if ( machinesCount >= 5)
    {
      alert('No se puene hacer mas de 5 ejercicios con maquinas por rutina')
      return;
    }


    setExercisesId([...exercisesId, parseInt(selectedExerciseId)]);
  
  };

  const createRoutineHandler = async (routineData) => {
    try {
      await fetch(`https://localhost:7067/api/Routine/CreateRoutine`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routineData), 
      });
      await fetchRoutines(); 
    } catch (error) {
      console.log("Error al agregar rutina a la base de datos:", error);
    }
  };

  const handleSubmit = () => {
    if (exercisesId.length === 0) {
      alert("Debe seleccionar al menos un ejercicio");
      return;
    }

    const data = {
      name: name,
      difficulty: parseInt(difficulty),
      duration: parseInt(duration),
      exercisesId: exercisesId 
    };

    console.log('JSON to send:', JSON.stringify(data));

    
    createRoutineHandler(data);

    onHide();
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
              <Form.Label htmlFor="routineName">Nombre de Rutina</Form.Label>
              <Form.Control
                type="text"
                id="routineName"
                placeholder="Ej: Rutina de pecho"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Seleccione la dificultad</Form.Label>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Alta"
                  name="difficulty"
                  type="radio"
                  id="difficulty1"
                  value={1}
                  checked={difficulty === 1}
                  onChange={(e) => setDifficulty(parseInt(e.target.value))}
                />
                <Form.Check
                  inline
                  label="Media"
                  name="difficulty"
                  type="radio"
                  id="difficulty2"
                  value={2}
                  checked={difficulty === 2}
                  onChange={(e) => setDifficulty(parseInt(e.target.value))}
                />
                <Form.Check
                  inline
                  label="Baja"
                  name="difficulty"
                  type="radio"
                  id="difficulty3"
                  value={3}
                  checked={difficulty === 3}
                  onChange={(e) => setDifficulty(parseInt(e.target.value))}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="duration">Duración:</Form.Label>
              <Form.Control
                type="number"
                id="duration"
                placeholder="Solo números"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="exercises">Selecciona ejercicio:</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  as="select"
                  id="exercises"
                  value={selectedExerciseId}
                  onChange={(e) => setSelectedExerciseId(e.target.value)}
                >
                  <option value="">Seleccionar</option>
                  {exercises.map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </option>
                  ))}
                </Form.Control>
                <Button variant="primary" onClick={handleAddExercise} className="ms-2">
                  Agregar
                </Button>
              </div>
              <div className="mt-3">
                <ul>
                  {exercisesId.map(id => (
                    <li key={id}>
                      {exercises.find(exercise => exercise.id === id)?.name}
                    </li>
                  ))}
                </ul>
              </div>
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
  fetchRoutines: PropTypes.func.isRequired, 
};

export default CreateModal;