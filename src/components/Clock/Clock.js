import React from "react";
import { Button } from "reactstrap";
import "./Clock.css";

const Clock = ({
  timeCount,
  startClock,
  pauseClock,
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
        {!timerStarted ? (
          <Button onClick={startClock} className="btn-light">Start</Button>
        ) : (
          <Button onClick={pauseClock} className="btn-light">Pause</Button>
        )}
        {!!timerStarted && (
          <>
            <Button onClick={resetClock} className="btn-light">Reset</Button>
            <Button onClick={saveSession} className="btn-light">Save</Button>
          </>
        )}
      </div>
    </>
  );
};

export default Clock;
