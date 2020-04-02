import React, { Component } from "react";
import UserInfo from "../components/UserInfo/UserInfo";
import { connect } from "react-redux";
import UpdateUserForm from "../components/UpdateUserForm";
import Button from "@material-ui/core/Button";

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
    const { user } = this.props;

    return (
      <>
        <UserInfo
          user={user}
          timeMeditated={this.state.meditationTime}
        />
        <Button onClick={this.displayUpdateUser}>Update User</Button>
        <UpdateUserForm
          currentUser={user}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
          displayUpdateUserForm={this.state.displayUpdateUserForm}
          displayUpdateUser={this.displayUpdateUser}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.meditationSessionsReducer.meditationSessions
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteUser: user => dispatch(deleteUser(user)),
//     updateUser: user => dispatch(updateUser(user)),
//   };
// };

export default connect(
  mapStateToProps,
  null
)(UserContainer);
