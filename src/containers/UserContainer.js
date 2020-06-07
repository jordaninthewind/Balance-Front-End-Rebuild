import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import UserInfo from "../components/UserInfo/UserInfo";
import UpdateUserForm from "../components/UpdateUserForm";
import SessionDisplay from "../components/SessionDisplay/SessionDisplay";
import {
  getUserMeditationSessions,
  deleteMeditationSession,
} from "../reducers/meditationSessionsReducer";

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayUpdateUserForm: false,
      meditationTime: null,
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const { uid } = this.props.currentUser;
      this.props.setUserMeditationSessions(uid);
    }
  }

  updateMeditationTime = (time) => {
    if (time) {
      this.setState({
        meditationTime: time.reduce((acc, curr) => acc + curr.duration, 0),
      });
    }
  };

  displayUpdateUser = () => {
    this.setState({
      displayUpdateUserForm: !this.state.displayUpdateUserForm,
    });
  };

  componentWillMount() {
    this.updateMeditationTime(this.props.sessions);
  }

  render() {
    const { user } = this.props;

    return (
      <Grid container direction="column">
        <UserInfo user={user} timeMeditated={this.state.meditationTime} displayUpdateUser={this.displayUpdateUser} />
        <UpdateUserForm
          currentUser={user}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
          displayUpdateUserForm={this.state.displayUpdateUserForm}
          displayUpdateUser={this.displayUpdateUser}
        />
        <SessionDisplay
          currentUser={user}
          meditationSessions={this.props.meditationSessions}
          deleteMeditationSession={this.props.deleteMeditationSession}
        />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meditationSessions: state.meditationSessionsReducer.meditationSessions,
    loading: state.meditationSessionsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserMeditationSessions: (currentUser) =>
      dispatch(getUserMeditationSessions(currentUser)),
    deleteMeditationSession: (session) =>
      dispatch(deleteMeditationSession(session)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
