import React, { Component } from "react";
import { connect } from "react-redux";
import Session from "../components/Session/Session";
import {
  getUserMeditationSessions,
  deleteMeditationSession
} from "../reducers/meditationSessionsReducer";
import SessionDisplay from '../components/SessionDisplay/SessionDisplay';

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
    if (!this.props.currentUser) {
      return <div className="title">Log in to see sessions!</div>;
    } 

    return (
      <SessionDisplay
        currentUser={this.props.currentUser}
        meditationSessions={this.props.meditationSessions}
        loading={this.props.loading}
        deleteMeditationSession={this.props.deleteMeditationSession}
      />
    )
    if (this.props.loading) {
      return <div className="title">Loading...</div>
    } else if (this.props.meditationSessions.length === 0) {
      return <div className="title">There are no sessions yet!</div>;
    } else {
      return (
        <SessionDisplay currentUser={this.props.currentUser} meditationSessions={this.props.meditationSessions} />
      );
    }
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
