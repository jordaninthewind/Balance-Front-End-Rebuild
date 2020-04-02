import React from "react";
import { connect } from "react-redux";
import Clock from "../components/Clock/Clock";
import { SessionModal } from "../components/SessionModal";
import {
  saveUserMeditationSession,
} from "../reducers/meditationSessionsReducer";
import { AuthUserContext } from '../components/FirebaseSession';

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      timeStart: null,
      duration: 0,
      showModal: false
    };
  }

  static contextType = AuthUserContext;

  timer = () => {
    this.setState({
      duration: this.state.duration + 1
    });
  };

  startClock = () => {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({
      timerStarted: true,
      timeStart: JSON.stringify(new Date())
    });
  };

  stopClock = () => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false
    });
  };

  resetClock = () => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStart: null,
      duration: 0,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  saveSession = async (e) => {
    if (this.context && this.context.uid && this.state.duration > 0) {
      await this.props.saveMeditationSession(this.context.uid, this.state.duration, this.state.timeStart);
      this.toggleModal();
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
          timeCount={this.state.duration}
          startClock={this.startClock}
          stopClock={this.stopClock}
          resetClock={this.resetClock}
          saveSession={this.saveSession}
          timerStarted={this.state.timerStarted}
        />
        <SessionModal
          buttonLabel={this.props.errors.errorCta}
          title={this.props.errors.errorTitle}
          body={this.props.errors.errorBody}
          showModal={this.state.showModal}
          toggle={this.toggleModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
    errors: state.meditationSessionsReducer.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveMeditationSession: (currentUser, duration, timeStarted) =>
      dispatch(saveUserMeditationSession(currentUser, duration, timeStarted))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer);
