import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Clock from "../components/Clock/Clock";
import { SessionModal } from "../components/SessionModal";
import { saveUserMeditationSession } from "../reducers/meditationSessionsReducer";
import { AuthUserContext } from "../components/FirebaseSession";
import TimeSelect from "../components/TimeSelect";

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: null,
      playAudio: true,
      showModal: false,
      timerStarted: false,
    };

    this.audio = new Audio(
      "https://www.singing-bowls.com/ActualSoundFiles/b7380420.mp3"
    );
  }

  static contextType = AuthUserContext;

  updateMeditationTime = ({ target }) => {
    this.setState({
      duration: target.value,
    });
  };

  timer = () => {
    this.setState((prevState) => ({
      duration: prevState.duration - 1,
    }));
  };

  playGong = () => {
    if (this.state.playAudio) {
      this.audio.play();
    }
  }

  startClock = () => {
    this.playGong();

    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({
      timerStarted: true,
    });
  };

  stopClock = () => {
    clearInterval(this.intervalId);

    this.setState({
      timerStarted: false,
    });
  };

  resetClock = () => {
    clearInterval(this.intervalId);

    this.setState({
      timerStarted: false,
      timeStart: null,
      duration: null,
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  saveSession = async () => {
    if (this.context && this.context.uid) {
      await this.props.saveMeditationSession(
        this.context.uid,
        this.state.duration,
        this.state.timeStart
      );
      this.toggleModal();
      this.resetClock();
    } else {
      this.toggleModal();
    }
  };

  toggleSound = () => {
    this.setState((prevState) => ({
      playAudio: !prevState.playAudio,
    }));
  };

  render() {
    if (this.state.duration === 0) {
      this.playGong();
      this.saveSession();
      this.setState({
        duration: null
      })
    }
    return (
      <>
        <Grid container direction="column">
          <Clock
            playAudio={this.state.playAudio}
            resetClock={this.resetClock}
            saveSession={this.saveSession}
            startClock={this.startClock}
            stopClock={this.stopClock}
            timeCount={this.state.duration}
            timerStarted={this.state.timerStarted}
            toggleSound={this.toggleSound}
            duration={this.state.duration}
          />
          <TimeSelect
            duration={this.state.duration}
            updateMeditationTime={this.updateMeditationTime}
          />
          <SessionModal
            buttonLabel={this.props.errors.errorCta}
            title={this.props.errors.errorTitle}
            body={this.props.errors.errorBody}
            showModal={this.state.showModal}
            toggle={this.toggleModal}
          />
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.meditationSessionsReducer.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMeditationSession: (currentUser, duration) =>
      dispatch(saveUserMeditationSession(currentUser, duration)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
