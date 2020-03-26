import React, { Component } from "react";
import { connect } from "react-redux";
import Clock from "../components/Clock/Clock";
import SessionModal from "../components/SessionModal/SessionModal";
import {
  saveUserMeditationSession,
} from "../reducers/meditationSessionsReducer";
// import * as moment from 'moment';

class TimerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      timeStart: null,
      timeStop: null,
      timeNow: null,
      showModal: false
    };
  }

  timer = () => {
    this.setState({
      timeNow: Date.now()
    });
  };

  startClock = () => {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({
      timerStarted: true,
      timeStart: Date.now(),
      timeNow: Date.now()
    });
  };

  stopClock = () => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStop: Date.now()
    });
  };

  resetClock = () => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStart: null,
      timeStop: null,
      timeNow: null
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  async saveSession(e) {
    if (
      this.props.currentUser &&
      this.state.timeStop - this.state.timeStart > 0
    ) {
      const duration = this.state.timeStop - this.state.timeStart;
      await this.props.saveMeditationSession(this.props.currentUser, duration);
      this.resetClock();
    } else {
      alert(
        "You must be logged in to save a session and timer must be at a value greater than zero!"
      );
    }
  };

  render() {
    return (
      <>
        <Clock
          timeCount={~~((this.state.timeNow - this.state.timeStart) / 1000)}
          startClock={this.startClock}
          stopClock={this.stopClock}
          resetClock={this.resetClock}
          saveSession={this.saveSession}
          timerStarted={this.state.timerStarted}
        />
        <SessionModal
          buttonLabel={"Something something something"}
          title={"Session Saved!"}
          body={"Yes, I can haz savez."}
          showModal={this.state.showModal}
          toggle={this.toggleModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveMeditationSession: (currentUser, duration) =>
      dispatch(saveUserMeditationSession(currentUser, duration))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer);
