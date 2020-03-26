import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setCurrentUser,
  checkCurrentUserStorage
} from '../reducers/usersReducer';
import LoginUserForm from '../components/LoginUserForm/LoginUserForm';
import CreateUserForm from '../components/CreateUserForm';
import UserContainer from './UserContainer';
import { Button } from 'reactstrap';

class UserLoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayCreateUser: false,
      displayLoginUser: false
    };
  }

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
    if (!this.props.currentUser) {
      return (
        <>
          <div className="title">Find Balance!</div>
          <div className="subtitle">
            Balance is a simple app to track your daily meditation, find
            inspiration through quotes and resources, and track progress.
          </div>
          {this.state.displayLoginUser && <LoginUserForm googleSignin={this.props.signInWithGoogle} />}
          {this.state.displayCreateUser && <CreateUserForm />}
          {!this.state.displayLoginUser && (
            <Button onClick={this.displayLoginUserForm} className="btn-light">Login</Button>
          )}
          {!this.state.displayCreateUser && (
            <Button onClick={this.displayCreateUserForm} className="btn-light">Sign Up</Button>
          )}
        </>
      );
    } else {
      return (
        <>
          <UserContainer />
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkCurrentUserStorage: () => dispatch(checkCurrentUserStorage()),
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginContainer);
