import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Create() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nueva rutina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Form.Group className="mb-3" controlId="createForm.ControlInput1">  
              <Form.Label>Nombre de Rutina</Form.Label> 
              <Form.Control
                type="rutinename"
                placeholder="Ej: Rutina de pecho"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createForm.ControlInput2">
              <Form.Label>Selecione la dificultad</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Alta"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Media"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Baja"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="createForm.ControlInput1">  
              <Form.Label>Duracion de la rutina es minutos</Form.Label> 
              <Form.Control
                type="number"
                placeholder="Solo numeros"
                autoFocus
              />
            </Form.Group>
          </Form>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{ejercicio.title}</Card.Title>
              <Card.Text>
                {ejercicio.parte}
              </Card.Text>
              <Card.Text>
                {ejercicio.maquina}
              </Card.Text>
              <Button variant="primary">Agregar ejercicio</Button>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Crear rutina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Create;