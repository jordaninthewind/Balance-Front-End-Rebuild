import React, { Component } from 'react';
import LoginUserForm from '../components/LoginUserForm/LoginUserForm';
import CreateUserForm from '../components/CreateUserForm/CreateUserForm';
import UserContainer from './UserContainer';
import Button from '@material-ui/core/Button';
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
    const { displayCreateUser, displayLoginUser } = this.state;
    const showDescription = !displayLoginUser && !displayCreateUser;

    if (!user) {
      return (
        <>
          {showDescription &&
            <>
              <h1>Find Balance!</h1>
              <h4>
                Balance is a simple app to track your daily meditation & progress over time.
              </h4>
            </>
          }
          {displayLoginUser &&
            <LoginUserForm
              doLogin={this.props.firebase.doSignInWithEmailAndPassword}
            />
          }
          {displayCreateUser &&
            <CreateUserForm
              doSignup={this.props.firebase.doCreateUserWithEmailAndPassword}
            />
          }
          {!displayCreateUser && (
            <Button onClick={this.displayCreateUserForm}>Sign Up</Button>
          )}
          {!displayLoginUser && (
            <Button onClick={this.displayLoginUserForm}>Login</Button>
          )}
        </>
      );
    }

    return <UserContainer user={user} />
  }
}

export default withFirebase(UserLoginContainer);