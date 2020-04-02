import React, { Component } from 'react';
import { createUser } from '../../reducers/usersReducer';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

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
      <FormGroup onSubmit={this.onSubmit}>
        <TextField
        margin="dense"
          label="First Name"
          variant="outlined"
          onChange={this.onChange}
          name="firstName"
          value={firstName}
          placeholder="First Name"
          required>
        </TextField>
        <TextField
          margin="dense"
          label="Last Name"
          variant="outlined"
          onChange={this.onChange}
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          required>
        </TextField>
        <TextField
          margin="dense"
          label="Password"
          variant="outlined"
          onChange={this.onChange}
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          required>
        </TextField>
        <TextField
          margin="dense"
          label="E-mail"
          variant="outlined"
          onChange={this.onChange}
          name="email"
          type="email"
          value={email}
          placeholder="E-mail"
          required>
        </TextField>
        <TextField
          margin="dense"
          label="Location"
          variant="outlined"
          onChange={this.onChange}
          name="location"
          value={location}
          placeholder="Location"
          required>
        </TextField>
        <br />
        <Button type="submit" className="btn-light">Create User!</Button>
        {error && <p>{error.message}</p>}
      </FormGroup >
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
