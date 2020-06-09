import React from "react";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from "@material-ui/core/Modal";

const SessionModal = ({ showModal, title, body, toggle }) => {
  return (
    <>
      <Modal open={showModal}>
        <Fade in={showModal}>
          <div>{title}</div>
          <div>{body}</div>
          <div>
            <Button color="warning" onClick={toggle}>
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SessionModal;
