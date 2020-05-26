import React from "react";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import "./Clock.css";

const Clock = ({
  timeCount,
  startClock,
  stopClock,
  resetClock,
  saveSession,
  timerStarted,
  playAudio,
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
      <div id="timer">{timeSpentMeditating}</div>
      <div id="buttonContainer">
        {!timerStarted && timeCount > 0 && (
          <Button outline onClick={startClock} color="secondary">
            Start Session
          </Button>
        )}
        {timerStarted && (
          <Button outline onClick={stopClock} color="secondary">
            End Session
          </Button>
        )}
        {!timerStarted && timeCount === 0 && (
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
      <div id="sound-toggle" onTouchEnd={toggleSound} onClick={toggleSound}>
        Turn {!playAudio ? "On" : "Off"} Gong
        <Switch checked={playAudio} onChange={toggleSound} />
      </div>
    </>
  );
};

export default Clock;
