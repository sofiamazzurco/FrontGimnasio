import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ show, onHide, onDelete, routineId }) => {
  console.log("ID recibido en el modal:", routineId); 

  const handleDelete = () => {
    if (routineId) { // si existe un Id, llama a la funcion
      onDelete(routineId);
    } else {
      console.log("ID de rutina no definido");
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Rutina</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro que querés eliminar la rutina?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


DeleteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  routineId: PropTypes.number.isRequired,
};

export default DeleteModal;
