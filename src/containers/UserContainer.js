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

  async componentWillMount() {
    if (this.props.currentUser) {
      const { uid } = this.props.currentUser;
      await this.props.getUserMeditationSessions(uid);
    }
  }

  displayUpdateUser = () => {
    this.setState((prevState) => ({
      displayUpdateUserForm: !prevState.displayUpdateUserForm,
    }));
  };

  render() {
    const { currentUser } = this.props;

    return (
      <Grid container direction="column">
        <UserInfo
          displayUpdateUser={this.displayUpdateUser}
          currentUser={currentUser}
        />
        <UpdateUserForm
          currentUser={currentUser}
          deleteUser={this.props.deleteUser}
          displayUpdateUser={this.displayUpdateUser}
          displayUpdateUserForm={this.state.displayUpdateUserForm}
          updateUser={this.props.updateUser}
        />
        <SessionDisplay
          currentUser={currentUser}
          deleteMeditationSession={this.props.deleteMeditationSession}
          meditationSessions={this.props.meditationSessions}
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
    getUserMeditationSessions: (currentUser) =>
      dispatch(getUserMeditationSessions(currentUser)),
    deleteMeditationSession: (session) =>
      dispatch(deleteMeditationSession(session)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
