import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ show, onHide }) => {
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
        <Button variant="danger" onClick={onHide}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default DeleteModal;

