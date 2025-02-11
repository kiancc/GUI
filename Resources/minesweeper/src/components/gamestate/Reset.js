import React from 'react';
import './reset.css';

function Reset({ onReset }) {

  return (
    <button className='reset-button' onClick={onReset}>
      Reset
    </button>
  );
}

export default Reset;
