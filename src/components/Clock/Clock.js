import React from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import "./Clock.css";

const Clock = ({
  duration,
  playAudio,
  resetClock,
  saveSession,
  startClock,
  stopClock,
  timeCount,
  timerStarted,
  toggleSound,
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
      {duration > 0 && (
        <>
          <div id="timer">{timeSpentMeditating}</div>
          <div id="buttonContainer">
            {!timerStarted && timeCount > 0 && (
              <Button onClick={startClock} color="primary" variant="contained">
                Start Session
              </Button>
            )}
            {timerStarted && (
              <Button onClick={stopClock} color="primary" variant="contained">
                End Session
              </Button>
            )}
            {!timerStarted && timeCount === 0 && (
              <>
                <Button onClick={saveSession} color="warning" >
                  Save Session
                </Button>
                <Button outline onClick={resetClock} color="secondary">
                  Reset
                </Button>
              </>
            )}
          </div>
          <div id="sound-toggle" onTouchEnd={toggleSound} onClick={toggleSound}>
            Turn {!playAudio ? "On" : "Off"} Gong
            <Switch checked={playAudio} color="primary"/>
          </div>
        </>
      )}
    </>
  );
};

export default Clock;
