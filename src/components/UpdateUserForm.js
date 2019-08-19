import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
      <div className="App-component">
        <h2>Update User</h2>
        <Button onClick={() => this.props.displayUpdateUser()}>
          Return To User
        </Button>
        <h6>All Fields and Password Required for Valid Update</h6>
        <form onSubmit={e => this.handleSubmit(e)}>
          First Name:{' '}
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.currentUser.name}
            required
          />
          <br />
          Last Name:{' '}
          <input
            onChange={this.handleChange}
            name="last_name"
            value={this.state.currentUser.last_name}
            required
          />{' '}
          <br />
          Email:{' '}
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.currentUser.email}
            required
          />{' '}
          <br />
          Location:{' '}
          <input
            onChange={this.handleChange}
            name="location"
            value={this.state.currentUser.location}
            required
          />
          <br />
          <h6>-- Profile Image Should Be Square --</h6>
          Profile Image Link: <br />
          <input
            onChange={this.handleChange}
            name="profile_url"
            value={this.state.currentUser.profile_url}
            required
          />
          <br />
          <br />
          <Button type="submit">Update User</Button>
        </form>
        <Button
          onClick={() => {
            if (window.confirm('Click to confirm delete'))
              this.props.deleteUser(this.props.currentUser);
          }}
        >
          Delete Account
        </Button>
      </div>
    );
  }
}

export default UpdateUserForm;
