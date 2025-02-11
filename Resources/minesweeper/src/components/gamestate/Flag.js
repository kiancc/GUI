import React from 'react';
import './flag.css';

function Flag({ flag, onFlagClicked }) {
  return (
    <button
      className={`flag ${flag ? 'active' : ''}`} // Add 'active' class when flag is true
      onClick={onFlagClicked}
    >
      Flag
    </button>
  );
}

export default Flag;
