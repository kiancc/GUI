import React, { useEffect } from 'react';
import './timer.css';

function Timer({ time, setTime, isActive }) {

  return (
    <div className="timer-container">
      <p>Time: {time}s</p>
    </div>
  );
}

export default Timer;
