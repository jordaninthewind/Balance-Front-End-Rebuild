import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: props.currentUser
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.state.currentUser);
  };

  handleChange = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let statusCopy = Object.assign({}, this.state);
    statusCopy.currentUser[inputName] = inputValue;

    this.setState(statusCopy);
  };

  render() {
    return (
      <Modal
        isOpen={this.props.displayUpdateUserForm}
        className={"modal-dialog-centered component"}
      >
        <ModalHeader>Update User</ModalHeader>
        <ModalBody>
          <h6>All Fields and Password Required for Valid Update</h6>
          {/* <form onSubmit={e => this.handleSubmit(e)}> */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>First Name</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="First Name"
              onChange={this.handleChange}
              name="name"
              value={this.state.currentUser.name}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Last Name</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Last Name"
              onChange={this.handleChange}
              name="last_name"
              value={this.state.currentUser.last_name}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>E-mail</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="E-mail"
              onChange={this.handleChange}
              name="email"
              value={this.state.currentUser.email}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Location</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Location"
              onChange={this.handleChange}
              name="name"
              value={this.state.currentUser.location}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Password</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
              value={this.state.currentUser.password}
              type="password"
              required
            />
          </InputGroup>
          <br />
          <h5>-- Profile Image Should Be Square --</h5>
          <h6>Profile Image Link:</h6>
          <InputGroup>
            <Input
              placeholder="Link to Profile Image Here"
              onChange={this.handleChange}
              name="profile_picture"
              value={this.state.currentUser.profile_url}
              required
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter style={{justifyContent: 'space-between'}}>
          <Button
            color="light"
            onClick={this.props.displayUpdateUser}
            >
            Return To User
          </Button>
          <Button
            outline
            color="secondary"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Update User
          </Button>
          <Button
            outline
            color="danger"
            onClick={() => {
              if (window.confirm("Click to confirm delete"))
                this.props.deleteUser(this.props.currentUser);
            }}
          >
            Delete Account
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

UpdateUserForm.propTypes = {
  displayUpdateUser: PropTypes.func,
  displayUpdateUserForm: PropTypes.bool
};

export default UpdateUserForm;
