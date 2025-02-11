import React, { useState, useEffect } from "react";
import './game.css';
import Flag from './gamestate/Flag';
import Reset from './gamestate/Reset';
import Timer from './gamestate/Timer';
import GameOver from "./gamestate/GameOver";
import Board from './minefield/Board';
import { generateBoard } from './minefield/boardUtils';

function Game() {
  const [isActive, setIsActive] = useState(false);
  const [flag, setFlag] = useState(false);
  const [board, setBoard] = useState(generateBoard());
  const [time, setTime] = useState(0);
  const [squares, setSquares] = useState(Array(64).fill(null));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (isActive && !gameOver) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(id); // Clean up interval on unmount or isActive change
    }
  }, [isActive, gameOver, setTime]);

  const handleFlagClicked = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleGameReset = () => {
    console.log("Resetting the game...");
    setIsActive(false);  // Stops the timer
    setFlag(false);       // Resets the flag
    setSquares(Array(64).fill(null));
    setBoard(generateBoard());  // Resets the board to its initial state
    setTime(0);
    setGameOver(false);
    console.log(board);
  };

  return (
    <div className="game">
      <Board 
        isActive={isActive} 
        setIsActive={setIsActive} 
        board={board} 
        squares={squares}
        setSquares={setSquares}
        flag={flag}
        gameOver={gameOver}
        setGameOver={handleGameOver}
        handleGameReset={handleGameReset}
      />
      <div className="control-panel">
        <Flag flag={flag} onFlagClicked={handleFlagClicked} />
        <Reset onReset={handleGameReset} />
        <Timer time={time} setTime={setTime} isActive={isActive} /> 
        </div>
      {gameOver && <GameOver />}
    </div>
  );
}

export default Game;
