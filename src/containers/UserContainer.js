import React, { Component } from 'react';
import UserInfo from '../components/UserInfo/UserInfo';
import { connect } from 'react-redux';
import UpdateUserForm from '../components/UpdateUserForm';
import { Button } from 'reactstrap';
import {
  deleteUser,
  updateUser,
  deleteCurrentUser
} from '../reducers/usersReducer';

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayUpdateUser: false
    };
  }

  displayUpdateUserForm = () => {
    this.setState({
      displayUpdateUser: !this.state.displayUpdateUser
    });
  };

  render() {
    if (this.state.displayUpdateUser) {
      return (
        <UpdateUserForm
          currentUser={this.props.currentUser}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
          displayUpdateUser={this.displayUpdateUserForm}
        />
      );
    } else {
      return (
        <div id="userComponent">
          {this.props.currentUser && (
            <div>
              <UserInfo currentUserData={this.props.currentUser} />
              <Button onClick={this.props.logOut} className="btn-light">Log Out</Button>
              <Button onClick={this.displayUpdateUserForm} className="btn-light">Update User</Button>
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
    users: state.usersReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: user => dispatch(deleteUser(user)),
    updateUser: user => dispatch(updateUser(user)),
    logOut: () => dispatch(deleteCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
