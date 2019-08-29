import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// class SessionModal extends React.Component {
//   render() {
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
