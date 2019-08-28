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
        {!timerStarted &&
          <Button onClick={startClock} className="btn btn-outline">Start Session</Button>          
        }
        {!!timerStarted && (
          <>
            <Button onClick={stopClock} className="btn btn-outline">Close Session</Button>
            <Button onClick={resetClock} className="btn btn-outline">Reset</Button>
          </>
        )}
        {(!timerStarted && timeCount > 0) &&
          <Button onClick={saveSession} className="btn btn-warning">Save Session</Button>
        }
      </div>
    </>
  );
};

export default Clock;
