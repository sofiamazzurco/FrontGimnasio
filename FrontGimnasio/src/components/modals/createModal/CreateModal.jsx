import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const CreateModal = ({ show, onHide, exercises }) => {
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
              <Form.Label>Duración:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Solo números"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Cerrar
          </Button>
          <Button variant="success">
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
};

export default CreateModal;
