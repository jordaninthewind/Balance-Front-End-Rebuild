import React, { Component } from 'react';
import { connect } from 'react-redux';
import Session from '../components/Session/Session';
import {
  getUserMeditationSessions,
  deleteMeditationSession
} from '../reducers/meditationSessionsReducer';

class MeditationSessionsContainer extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.setUserMeditationSessions(this.props.currentUser);
    }
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Log in to see sessions!</div>;
    }

    if (this.props.meditationSessions.length === 0) {
      return <div>There are no sessions yet!</div>;
    } else {
      return (
        <>
          <div className="title">
            {this.props.currentUser.name}
            's Sessions
          </div>
          <div className="subtitle">
            Total Count: {this.props.meditationSessions.count}
          </div>
          <div className="component">
            {this.props.meditationSessions.reverse().map(session => {
              return (
                <Session
                  key={session.id}
                  session={session}
                  currentUser={this.props.currentUser}
                  deleteSession={this.props.deleteMeditationSession}
                />
              );
            })}
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
    meditationSessions: state.meditationSessionsReducer.meditationSessions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserMeditationSessions: currentUser =>
      dispatch(getUserMeditationSessions(currentUser)),
    deleteMeditationSession: (currentUser, session) =>
      dispatch(deleteMeditationSession(currentUser, session))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeditationSessionsContainer);
