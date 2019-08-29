import React from "react";
import { Button } from "reactstrap";
import "./Clock.css";

const Clock = ({
  timeCount,
  startClock,
  stopClock,
  resetClock,
  saveSession,
  timerStarted
}) => {
  const minutes = ~~(timeCount / 60);
  const seconds = () => {
    if (timeCount % 60 < 10) {
      return "0" + (timeCount % 60);
    } else {
      return timeCount % 60;
    }
  };

  const timeSpentMeditating =
    timeCount < 60 ? timeCount : minutes + ":" + seconds();

  return (
    <>
      <div className="title">Time Since Start</div>
      <div id="timer">{timeSpentMeditating}</div>
      <div id="buttonContainer">
        {!timerStarted && timeCount <= 0 && (
          <Button outline onClick={startClock} color="secondary">
            Start Session
          </Button>
        )}
        {!!timerStarted && (
          <Button outline onClick={stopClock} color="secondary">
            Close Session
          </Button>
        )}
        {!timerStarted && timeCount > 0 && (
          <>
            <Button onClick={saveSession} color="warning">
              Save Session
            </Button>
            <Button outline onClick={resetClock} color="secondary">
              Reset
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Clock;
