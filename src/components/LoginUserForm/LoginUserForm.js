import React, { Component } from "react";
// import { loginUser } from "../../reducers/usersReducer";
// import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./LoginUserForm.scss";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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
    const { email, password } = this.state;

    event.preventDefault();
    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
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
      <form className="loginForm" onSubmit={this.onSubmit}>
        <p className="inputField">
          <label>E-mail: </label>
          <input
            onChange={this.onChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
        </p>
        <p className="inputField">
          <label>Password: </label>
          <input
            onChange={this.onChange}
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
        <Button
          type="submit"
          className="btn-light"
          disabled={!isValid}
        >
          Log In
        </Button>
        {/* <button onClick={this.props.googleSignin}>Sign In with Google</button> */}
        {error & <p>{error.message}</p>}
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     errorMessage: state.usersReducer.errorMessage
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: (email, password) => dispatch(loginUser(email, password))
//   };
// };


// export default connect(
export default withFirebase(LoginUserForm);
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginUserForm);
