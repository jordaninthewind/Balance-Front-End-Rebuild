import React, { Component } from "react";
import { loginUser } from "../../reducers/usersReducer";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./LoginUserForm.scss";

class LoginUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
      <div className="loginForm">
        <form onSubmit={e => this.handleSubmit(e)}>
          <p className="inputField">
            <label>E-mail: </label>
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              value={this.state.email}
              required
            />
          </p>
          <p className="inputField">
            <label>Password: </label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              value={this.state.password}
              required
            />
          </p>
          {this.props.errorMessage && (
            <div class="alert alert-warning" role="alert">
              {this.props.errorMessage}
            </div>
          )}
          <Button type="submit" className="btn-light">
          Log In
        </Button>
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
