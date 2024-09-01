
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";

const ModifyModal = ({show, onHide}) => {

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Rutina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro que querés modificar la rutina?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="success" onClick={onHide}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModifyModal;

ModifyModal.propTypes={
  show: PropTypes.bool,
  onHide: PropTypes.bool
}