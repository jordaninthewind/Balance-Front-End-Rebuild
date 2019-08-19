import React, { Component } from 'react';
import { loginUser } from '../../reducers/usersReducer';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './LoginUserForm.css';

class LoginUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>{this.props.errorMessage}</div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="inputField">
          <label>E-mail:</label>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
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
          <br />
          <Button type="submit">Log In!</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.usersReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUserForm);
