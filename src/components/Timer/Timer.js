import React from 'react';
import './Timer.css';

const Timer = ({
  timeCount,
  startTimer,
  pauseTimer,
  resetTimer,
  saveSession,
  timerStarted
}) => {
  const minutes = ~~(timeCount / 60);
  const seconds = timeCount % 60 < 10 ? '0' + (timeCount % 60) : timeCount % 60;
  const timeSpent = timeCount < 60 ? timeCount : minutes + ':' + seconds;

  return (
    <div>
      <div className="title">Time Since Start</div>
      <div id="timer">{timeSpent}</div>
      <div id="buttonContainer">
        {!timerStarted ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        {(timerStarted || timeCount > 0) && (
          <>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={saveSession}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
