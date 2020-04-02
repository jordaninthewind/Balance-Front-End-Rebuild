import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

import * as ROUTES from '../../constants/routes';
import "./LoginUserForm.scss";

const INITIAL_STATE = {
  email: '',
  password: '',
  error: ''
}

class LoginUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.doLogin(email, password)
      .then(() => {
        this.setState({
          ...INITIAL_STATE
        });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      })
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password, error } = this.state;

    const isValid = email && password;

    return (
      <form onClick={this.onSubmit}>
        <FormGroup>
          <TextField
            margin="dense"
            label="E-mail"
            variant="outlined"
            onChange={this.onChange}
            name="email"
            type="email"
            value={this.state.email}
            placeholder="E-mail"
            required
          />
          <TextField
            margin="dense"
            label="Password"
            variant="outlined"
            onChange={this.onChange}
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            required
          />
          <Button
            type="submit"
            disabled={!isValid}
          >
            Log In
        </Button>
          {error && <p>{error.message}</p>}
        </FormGroup>
      </form>
    );
  }
}

export default LoginUserForm;