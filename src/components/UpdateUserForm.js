import React, { Component } from "react";
import { Button } from "reactstrap";

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
      <div className="component">
        <h2>Update User</h2>
        <div>
          <Button color="light" onClick={this.props.displayUpdateUser}>
            Return To User
          </Button>
        </div>
        <div>
          <h6>All Fields and Password Required for Valid Update</h6>
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>First Name:</p>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.currentUser.name}
            required
          />

          <p>Last Name:</p>
          <input
            onChange={this.handleChange}
            name="last_name"
            value={this.state.currentUser.last_name}
            required
          />

          <p>Email:</p>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.currentUser.email}
            required
          />

          <p>Location:</p>
          <input
            onChange={this.handleChange}
            name="location"
            value={this.state.currentUser.location}
            required
          />
          <p>Password: (Required)</p>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.currentUser.password}
            required
          />
          <h5>-- Profile Image Should Be Square --</h5>
          <h6>Profile Image Link:</h6>
          <input
            onChange={this.handleChange}
            name="profile_url"
            value={this.state.currentUser.profile_url}
            required
          />
          <br />
          <Button color="light" type="submit">
            Update User
          </Button>
          <Button
            color="light"
            onClick={() => {
              if (window.confirm("Click to confirm delete"))
                this.props.deleteUser(this.props.currentUser);
            }}
          >
            Delete Account
          </Button>
        </form>
      </div>
    );
  }
}

export default UpdateUserForm;
