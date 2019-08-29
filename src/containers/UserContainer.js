import React, { Component } from "react";
import UserInfo from "../components/UserInfo/UserInfo";
import { connect } from "react-redux";
import UpdateUserForm from "../components/UpdateUserForm";
import { Button } from "reactstrap";
import {
  deleteUser,
  updateUser,
  deleteCurrentUser
} from "../reducers/usersReducer";

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayUpdateUserForm: false,
      meditationTime: null,
    };
  }

  updateMeditationTime = time => {
    if (time) {
      this.setState({
        meditationTime: time.reduce((acc, curr) => acc + curr.duration, 0)
      });
    }
  };

  displayUpdateUser = () => {
    this.setState({
      displayUpdateUserForm: !this.state.displayUpdateUserForm
    });
  };

  componentWillMount() {
    this.updateMeditationTime(this.props.sessions);
  }

  render() {
    console.log(this.state.meditationTime);
    // if (this.state.displayUpdateUserForm) {
    //   return (
    //     <UpdateUserForm
    //       currentUser={this.props.currentUser}
    //       updateUser={this.props.updateUser}
    //       deleteUser={this.props.deleteUser}
    //       displayUpdateUserForm={this.displayUpdateUserForm}
    //     />
    //   );
    // } else {
    return (
      <div id="userComponent">
        {this.props.currentUser && (
          <>
            <UserInfo
              currentUserData={this.props.currentUser}
              timeMeditated={this.state.meditationTime}
            />
            <Button onClick={this.props.logOut} className="btn-light">
              Log Out
            </Button>
            <Button onClick={this.displayUpdateUser} className="btn-light">
              Update User
            </Button>
            <UpdateUserForm
              currentUser={this.props.currentUser}
              updateUser={this.props.updateUser}
              deleteUser={this.props.deleteUser}
              displayUpdateUserForm={this.state.displayUpdateUserForm}
              displayUpdateUser={this.displayUpdateUser}
            />
          </>
        )}
      </div>
    );
  }
}
// }

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
    users: state.usersReducer.users,
    sessions: state.meditationSessionsReducer.meditationSessions
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
