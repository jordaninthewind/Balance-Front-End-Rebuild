import React, { Component } from 'react';
import LoginUserForm from '../components/LoginUserForm/LoginUserForm';
import CreateUserForm from '../components/CreateUserForm/CreateUserForm';
import UserContainer from './UserContainer';
import { Button } from 'reactstrap';
import { withFirebase } from '../components/Firebase';
import { AuthUserContext } from '../components/FirebaseSession'

const INITIAL_STATE = {
  displayCreateUser: false,
  displayLoginUser: false
}

class UserLoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  static contextType = AuthUserContext;

  removeUserForm = () => {
    this.setState({
      displayCreateUser: false,
      displayLoginUser: false
    });
  };

  displayCreateUserForm = () => {
    this.setState({
      displayCreateUser: true,
      displayLoginUser: false
    });
  };

  displayLoginUserForm = () => {
    this.setState({
      displayLoginUser: true,
      displayCreateUser: false
    });
  };

  render() {
    const user = this.context;

    if (!user) {
      return (
        <>
          <div className="title">Find Balance!</div>
          <div className="subtitle">
            Balance is a simple app to track your daily meditation, find
            inspiration through quotes and resources, and track progress.
          </div>
          {!this.state.displayLoginUser && (
            <Button onClick={this.displayLoginUserForm} className="btn-light">Login</Button>
          )}
          {this.state.displayLoginUser && <LoginUserForm />}
          {!this.state.displayCreateUser && (
            <Button onClick={this.displayCreateUserForm} className="btn-light">Sign Up</Button>
          )}
          {this.state.displayCreateUser && <CreateUserForm />}
        </>
      );
    } else {
      return (
        <>
          <UserContainer user={user} />
        </>
      );
    }
  }
}

export default UserLoginContainer;