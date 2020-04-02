import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserMeditationSessions,
  deleteMeditationSession
} from "../reducers/meditationSessionsReducer";
import SessionDisplay from '../components/SessionDisplay/SessionDisplay';
import { Container, CssBaseline } from '@material-ui/core';

class MeditationSessionsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const { uid } = this.props.currentUser;
      this.props.setUserMeditationSessions(uid);
    }
  }

  render() {
    const { currentUser, loading, meditationSessions, deleteMeditationSession } = this.props;
    if (!currentUser) return <div className="title">Log in to see sessions!</div>;

    return (
      <SessionDisplay
        currentUser={currentUser}
        meditationSessions={meditationSessions}
        loading={loading}
        deleteMeditationSession={deleteMeditationSession}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    meditationSessions: state.meditationSessionsReducer.meditationSessions,
    loading: state.meditationSessionsReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserMeditationSessions: currentUser =>
      dispatch(getUserMeditationSessions(currentUser)),
    deleteMeditationSession: session =>
      dispatch(deleteMeditationSession(session))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeditationSessionsContainer);
// export default MeditationSessionsContainer;
