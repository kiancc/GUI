// import {useState} from 'react';
import React from 'react';
import Board from './components/minefield/Board';
import './appStyle.css';

function App() {

  return (
    <>
      <div>
        <header>
          <h1>Minesweeper!</h1>
        </header>
        <Board />

      </div>
    </>
  );
}

export default App;
