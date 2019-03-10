import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from '../components/Clock/Clock';

class TimerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      timeStart: null,
      timeCount: 0,
    }
  }

  timer = () => {
    this.setState({
      timeCount: ~~((Date.now() - this.state.timeStart) / 1000),
    });
  };

  startClock = e => {
    if (this.state.timerStarted === false) {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
      this.setState({
        timerStarted: true,
        timeStart: Date.now(),
      });
    }
  };

  pauseClock = e => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false
    });
  };

  resetClock = e => {
    clearInterval(this.intervalId);
    this.setState({
      timerStarted: false,
      timeStart: null,
      timeCount: 0,
    });
  };

  saveSession = e => {
    if (this.props.currentUser && this.state.timeCount > 0) {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/users/${
        this.props.currentUser.id
        }/meditation_sessions`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            meditation_session: { time: this.state.timeCount }
          })
        }
      )
        .then(() => alert('Saved session!'))
        .catch(res => console.log(res));

      this.setState({
        timeCount: 0,
        timerStarted: false
      });
      clearInterval(this.intervalId);
    } else {
      alert(
        'You must be logged in to save a session and timer must be at a value greater than zero!'
      );
    }
  };

  render() {
    return (
      <Clock
        timeCount={this.state.timeCount}
        startClock={this.startClock}
        pauseClock={this.pauseClock}
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
