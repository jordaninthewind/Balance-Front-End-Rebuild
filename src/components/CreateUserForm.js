import React, { Component } from 'react';
import { createUser } from '../reducers/usersReducer';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      location: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.location
    );
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      location: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="inputField">
            <label>First Name:</label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
              required
            />
          </div>
          <div className="inputField">
            <label>Last Name:</label>
            <input
              onChange={this.handleChange}
              name="lastName"
              value={this.state.lastName}
              required
            />
          </div>
          <div className="inputField">
            <label>Password:</label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              value={this.state.password}
              required
            />
          </div>
          <div className="inputField">
            <label>Email:</label>
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              value={this.state.email}
              required
            />
          </div>
          <div className="inputField">
            <label>Location:</label>
            <input
              onChange={this.handleChange}
              name="location"
              value={this.state.location}
              required
            />
          </div>
          <br />
          <Button type="submit" className="btn-light">Create User!</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (firstName, lastName, email, password, location) =>
      dispatch(createUser(firstName, lastName, email, password, location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateUserForm);
