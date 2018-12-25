import React from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ countdownTimeCount, startClock }) => {
  return (
    <div>
      <div>{countdownTimeCount}</div>
      <button onClick={startClock}>Start</button>
    </div>
  )
}

export default CountdownTimer
