import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import UserInfo from "../components/UserInfo/UserInfo";
import UpdateUserForm from "../components/UpdateUserForm";
import SessionDisplay from "../components/SessionDisplay/SessionDisplay";

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayUpdateUserForm: false,
      meditationTime: null,
    };
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
        <Button
          onClick={this.displayUpdateUser}
          variant="contained"
          color="primary"
        >
          Update Profile
        </Button>
        <UserInfo user={user} timeMeditated={this.state.meditationTime} />
        <UpdateUserForm
          currentUser={user}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
          displayUpdateUserForm={this.state.displayUpdateUserForm}
          displayUpdateUser={this.displayUpdateUser}
        />
        <SessionDisplay currentUser={user} />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.meditationSessionsReducer.meditationSessions,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteUser: user => dispatch(deleteUser(user)),
//     updateUser: user => dispatch(updateUser(user)),
//   };
// };

export default connect(mapStateToProps, null)(UserContainer);
