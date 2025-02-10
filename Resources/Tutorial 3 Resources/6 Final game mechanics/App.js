import {useState} from 'react';

const hay = Math.floor(Math.random() * 9);

function Square({value, onSquareClicked}){
  let myValue;
  if(value === null){
    myValue = '🌾';
  }else if (value === 'X'){
    myValue = '❌';
  }else{
    myValue = '📌';
  }

  return (
    <button className="square" onClick={onSquareClicked}>{myValue}</button>
  )
}


function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));


  function handleClick(i){
    const nextSquares = squares.slice();
    if(i === hay){
      nextSquares[i] = "H";
    }else{
      nextSquares[i] = "X";
    }
    setSquares(nextSquares);
  }

  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClicked={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClicked={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClicked={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClicked={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClicked={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClicked={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClicked={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClicked={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClicked={() => handleClick(8)}/>
    </div>
    </>
  );
}

export default App;
