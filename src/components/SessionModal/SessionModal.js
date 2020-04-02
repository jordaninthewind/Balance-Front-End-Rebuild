import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from '@material-ui/core/Button';

const SessionModal = ({ showModal, title, body, toggle }) => {
  return (
    <>
      <Modal isOpen={showModal} className={"modal-dialog-centered"}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SessionModal;
