import React from 'react';
import './Clock.css';

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
      return '0' + (timeCount % 60);
    } else {
      return timeCount % 60;
    }
  };

  const timeSpentMeditating =
    timeCount < 60 ? timeCount : minutes + ':' + seconds();

  return (
    <div>
      <div className="title">Time Since Start</div>
      <div id="timer">{timeSpentMeditating}</div>
      {!timerStarted ? (
        <button onClick={startClock}>
          Start
        </button>
      ) : (
        <button onClick={pauseClock}>
          Pause
        </button>
      )}
      {timeCount > 0 && (
        <>
          <button onClick={resetClock}>Reset</button>
          <button onClick={saveSession}>Save</button>
        </>
      )}
    </div>
  );
};

export default Clock;
