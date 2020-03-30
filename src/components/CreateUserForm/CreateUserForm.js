import React, { Component } from 'react';
import { createUser } from '../../reducers/usersReducer';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  location: '',
  error: ''
}

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, location } = this.state;

    this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({
          ...INITIAL_STATE
        });
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { firstName, lastName, email, password, location, error } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="inputField">
            <label>First Name:</label>
            <input
              onChange={this.onChange}
              name="firstName"
              value={firstName}
              required
            />
          </div>
          <div className="inputField">
            <label>Last Name:</label>
            <input
              onChange={this.onChange}
              name="lastName"
              value={lastName}
              required
            />
          </div>
          <div className="inputField">
            <label>Password:</label>
            <input
              onChange={this.onChange}
              name="password"
              type="password"
              value={password}
              required
            />
          </div>
          <div className="inputField">
            <label>Email:</label>
            <input
              onChange={this.onChange}
              name="email"
              type="email"
              value={email}
              required
            />
          </div>
          <div className="inputField">
            <label>Location:</label>
            <input
              onChange={this.onChange}
              name="location"
              value={location}
              required
            />
          </div>
          <br />
          <Button type="submit" className="btn-light">Create User!</Button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createUser: (firstName, lastName, email, password, location) =>
//       dispatch(createUser(firstName, lastName, email, password, location))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )
export default withFirebase(CreateUserForm);
