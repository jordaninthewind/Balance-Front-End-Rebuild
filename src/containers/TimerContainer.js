import React, { Component } from "react";
import { connect } from "react-redux";
import Clock from "../components/Clock/Clock";
// import * as moment from 'moment';

class TimerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      timeStart: null,
      timeStop: null,
      timeNow: null
    };
  }

  timer = () => {
    this.setState({
      timeNow: Date.now()
    });
  };

  startClock = () => {
    if (this.state.timerStarted === false) {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
      this.setState({
        timerStarted: true,
        timeStart: Date.now(),
        timeNow: Date.now()
      });
    }
  };

  stopClock = () => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStop: Date.now()
    });
  };

  resetClock = e => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStart: null,
      timeStop: null,
      timeNow: null
    });
  };

  saveSession = e => {
    if (this.props.currentUser && (this.state.timeStop - this.state.timeStart) > 0) {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/users/${this.props.currentUser.id}/meditation_sessions`,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            meditation_session: {
              time: Math.abs(~~(this.state.timeStart - this.state.timeStop)/1000)
            }
          })
        }
      )
        .then(() => alert("Saved session!"))
        .catch(res => console.log(res));

      clearInterval(this.intervalId);
      this.resetClock();
    } else {
      alert(
        "You must be logged in to save a session and timer must be at a value greater than zero!"
      );
    }
  };

  render() {
    return (
      <Clock
        timeCount={~~((this.state.timeNow - this.state.timeStart)/1000)}
        startClock={this.startClock}
        stopClock={this.stopClock}
        resetClock={this.resetClock}
        saveSession={this.saveSession}
        timerStarted={this.state.timerStarted}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(TimerContainer);
