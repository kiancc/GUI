// import {useState} from 'react';
import React from 'react';
import Game from './components/Game';
import './appStyle.css';

function App() {

  return (
    <>
      <div>
        <header>
          <h1>Eggsweeper!</h1>
        </header>
        <Game />

      </div>
    </>
  );
}

export default App;
