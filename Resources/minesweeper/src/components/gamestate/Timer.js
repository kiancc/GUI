import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer({ isActive, onReset }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      setTime(0); // Reset timer on activation
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="timer-container">
      <p>Time: {time}s</p>
    </div>
  );
}

export default Timer;
