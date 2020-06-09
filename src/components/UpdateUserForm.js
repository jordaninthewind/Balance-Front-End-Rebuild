import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import Modal from "@material-ui/core/Modal";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UpdateUserForm = (props) => {
  const classes = useStyles();

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.updateUser(props.currentUser);
  // };

  // handleChange = ({ target }) => {
  //   let inputName = target.name;
  //   let inputValue = target.value;

  //   let statusCopy = Object.assign({}, props.;
  //   statusCopy.currentUser[inputName] = inputValue;

  //   setState(statusCopy);
  // };

  // render() {
  return (
    <Modal
      open={props.displayUpdateUserForm}
      BackdropComponent={Backdrop}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Fade in={props.displayUpdateUserForm}>
        <div>Update User</div>
        <div>
          <h6>All Fields and Password Required for Valid Update</h6>
          {/* <form onSubmit={e => handleSubmit(e)}> */}
          <div>
            <label>First Name</label>
            <input
              placeholder="First Name"
              // onChange={handleChange}
              name="name"
              // value={props.currentUser.name}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              // onChange={handleChange}
              name="last_name"
              // value={props.currentUser.last_name}
              required
            />
          </div>
          <div>
            <label>E-mail</label>

            <input
              placeholder="E-mail"
              // onChange={handleChange}
              name="email"
              // value={props.currentUser.email}
              required
            />
          </div>
          <div>
            <label>Location</label>

            <input
              placeholder="Location"
              // onChange={handleChange}
              name="name"
              // value={props.currentUser.location}
              required
            />
          </div>
          <div>
            <label>Password</label>

            <input
              placeholder="Password"
              // onChange={handleChange}
              name="password"
              // value={props.currentUser.password}
              type="password"
              required
            />
          </div>
          <br />
          <h6>Profile Image Link:</h6>
          <div>
            <input
              placeholder="Link to Profile Image Here"
              // onChange={handleChange}
              name="profile_picture"
              // value={props.currentUser.profile_url}
              required
            />
          </div>
        </div>
        <div style={{ justifyContent: "space-between" }}>
          <Button color="light" onClick={props.displayUpdateUser}>
            Return To User
          </Button>
          <Button
            outline
            color="secondary"
            type="submit"
          // onClick={(e) => handleSubmit(e)}
          >
            Update User
          </Button>
          <Button
            outline
            color="danger"
            onClick={() => {
              if (window.confirm("Click to confirm delete"))
                props.deleteUser(/** to update */);
            }}
          >
            Delete Account
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}
// }

// UpdateUserForm.propTypes = {
//   displayUpdateUser: PropTypes.func,
//   displayUpdateUserForm: PropTypes.bool,
// };

export default UpdateUserForm;
