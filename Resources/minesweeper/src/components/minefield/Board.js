import {useState} from 'react';
import './style.css';
import Square from './Square';
import Timer from '../gamestate/Timer';
import Reset from '../gamestate/Reset';


// initialises board
// -----------------
let board = Array();

for (let i = 0; i < 8; i++) {
    const row = Array();
    for (let j = 0; j < 8; j++) {
        row.push(null);
    }
    board.push(row);
}
// console.log(board);
// -----------------

// adds random mines
// -----------------
const num_mines = 10;
for (let i = 0; i < num_mines; i++) {
    let m = Math.floor(Math.random() * 8);
    let n = Math.floor(Math.random() * 8);
    while (board[m][n] != null) {
      m = Math.floor(Math.random() * 8);
      n = Math.floor(Math.random() * 8);
    }
    board[m][n] = "X";
}
console.log(board);
// -----------------

// populates num adj mines in squares
// -----------------
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let num_mines = 0;
    if (board[i][j] != "X") {
      const adj_pos = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
      for (let n = 0; n < adj_pos.length; n++) {
        const idx = adj_pos[n][0] + i;
        const jdx = adj_pos[n][1] + j;
        // if the surrounding indicies are in bounds count number of mines;
        if ((0 <= idx && idx < 8) && (0 <= jdx && jdx < 8)) {
          if (board[idx][jdx] === "X") {
            num_mines++;
          }
          
        }
      }
      board[i][j] = num_mines;
    }
  }
}
// console.log(board);
// -----------------

function Board() {

  const [squares, setSquares] = useState(Array(64).fill(null));
  const [isActive, setIsActive] = useState(false);

  // const handleStart = () => {
  //   setIsActive(true);
  // };

  const handleReset = () => {
    setIsActive(false);
  }

  function handleClick(i){
    if (isActive === false) {
      setIsActive(true);
    }
    let nextSquares = squares.slice();
    let r = Math.floor(i / 8);
    let c = i % 8;

    if (board[r][c] == "0") {
      // do a dfs and clear adjacent zeros
      nextSquares[i] = board[r][c];
      let stack = [[r, c]];
      let visited = new Set();
      visited.add(i);

      while (stack.length > 0) {
        let pos = stack.pop();
        const adj_pos = [[-1,0], [0,-1], [1,0], [0,1]];
        for (let n = 0; n < adj_pos.length; n++) {
          const idx = pos[0] + adj_pos[n][0];
          const jdx = pos[1] + adj_pos[n][1];
          if (0 <= idx && idx < 8 && 0 <= jdx && jdx < 8) {
            if (board[idx][jdx] == "0" && visited.has(idx * 8 + jdx) === false) {
              nextSquares[idx * 8 + jdx] = board[idx][jdx];
              stack.push([idx, jdx]);
              visited.add(idx * 8 + jdx);
            }
          }
        }
      }
    }
    else if (board[r][c] != "X") {
      // if the square isn't a mine, show surrounding tiles
      nextSquares[i] = board[r][c];
    }
    else{
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
      <Square value={squares[3]} onSquareClicked={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClicked={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClicked={() => handleClick(5)}/>
      <Square value={squares[6]} onSquareClicked={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClicked={() => handleClick(7)}/>

    </div>
    <div className="board-row">
      <Square value={squares[8]} onSquareClicked={() => handleClick(8)}/>
      <Square value={squares[9]} onSquareClicked={() => handleClick(9)}/>
      <Square value={squares[10]} onSquareClicked={() => handleClick(10)}/>
      <Square value={squares[11]} onSquareClicked={() => handleClick(11)}/>
      <Square value={squares[12]} onSquareClicked={() => handleClick(12)}/>
      <Square value={squares[13]} onSquareClicked={() => handleClick(13)}/>
      <Square value={squares[14]} onSquareClicked={() => handleClick(14)}/>
      <Square value={squares[15]} onSquareClicked={() => handleClick(15)}/>
    </div>
    <div className="board-row">
      <Square value={squares[16]} onSquareClicked={() => handleClick(16)}/>
      <Square value={squares[17]} onSquareClicked={() => handleClick(17)}/>
      <Square value={squares[18]} onSquareClicked={() => handleClick(18)}/>
      <Square value={squares[19]} onSquareClicked={() => handleClick(19)}/>
      <Square value={squares[20]} onSquareClicked={() => handleClick(20)}/>
      <Square value={squares[21]} onSquareClicked={() => handleClick(21)}/>
      <Square value={squares[22]} onSquareClicked={() => handleClick(22)}/>
      <Square value={squares[23]} onSquareClicked={() => handleClick(23)}/>
    </div>
    <div className="board-row">
      <Square value={squares[24]} onSquareClicked={() => handleClick(24)}/>
      <Square value={squares[25]} onSquareClicked={() => handleClick(25)}/>
      <Square value={squares[26]} onSquareClicked={() => handleClick(26)}/>
      <Square value={squares[27]} onSquareClicked={() => handleClick(27)}/>
      <Square value={squares[28]} onSquareClicked={() => handleClick(28)}/>
      <Square value={squares[29]} onSquareClicked={() => handleClick(29)}/>
      <Square value={squares[30]} onSquareClicked={() => handleClick(30)}/>
      <Square value={squares[31]} onSquareClicked={() => handleClick(31)}/>
    </div>
    <div className="board-row">
      <Square value={squares[32]} onSquareClicked={() => handleClick(32)}/>
      <Square value={squares[33]} onSquareClicked={() => handleClick(33)}/>
      <Square value={squares[34]} onSquareClicked={() => handleClick(34)}/>
      <Square value={squares[35]} onSquareClicked={() => handleClick(35)}/>
      <Square value={squares[36]} onSquareClicked={() => handleClick(36)}/>
      <Square value={squares[37]} onSquareClicked={() => handleClick(37)}/>
      <Square value={squares[38]} onSquareClicked={() => handleClick(38)}/>
      <Square value={squares[39]} onSquareClicked={() => handleClick(39)}/>
    </div>
    <div className="board-row">
      <Square value={squares[40]} onSquareClicked={() => handleClick(40)}/>
      <Square value={squares[41]} onSquareClicked={() => handleClick(41)}/>
      <Square value={squares[42]} onSquareClicked={() => handleClick(42)}/>
      <Square value={squares[43]} onSquareClicked={() => handleClick(43)}/>
      <Square value={squares[44]} onSquareClicked={() => handleClick(44)}/>
      <Square value={squares[45]} onSquareClicked={() => handleClick(45)}/>
      <Square value={squares[46]} onSquareClicked={() => handleClick(46)}/>
      <Square value={squares[47]} onSquareClicked={() => handleClick(47)}/>
    </div>
    <div className="board-row">
      <Square value={squares[48]} onSquareClicked={() => handleClick(48)}/>
      <Square value={squares[49]} onSquareClicked={() => handleClick(49)}/>
      <Square value={squares[50]} onSquareClicked={() => handleClick(50)}/>
      <Square value={squares[51]} onSquareClicked={() => handleClick(51)}/>
      <Square value={squares[52]} onSquareClicked={() => handleClick(52)}/>
      <Square value={squares[53]} onSquareClicked={() => handleClick(53)}/>
      <Square value={squares[54]} onSquareClicked={() => handleClick(54)}/>
      <Square value={squares[55]} onSquareClicked={() => handleClick(55)}/>
    </div>
    <div className="board-row">
      <Square value={squares[56]} onSquareClicked={() => handleClick(56)}/>
      <Square value={squares[57]} onSquareClicked={() => handleClick(57)}/>
      <Square value={squares[58]} onSquareClicked={() => handleClick(58)}/>
      <Square value={squares[59]} onSquareClicked={() => handleClick(59)}/>
      <Square value={squares[60]} onSquareClicked={() => handleClick(60)}/>
      <Square value={squares[61]} onSquareClicked={() => handleClick(61)}/>
      <Square value={squares[62]} onSquareClicked={() => handleClick(62)}/>
      <Square value={squares[63]} onSquareClicked={() => handleClick(63)}/>
    </div>

    <div className='control-panel'>
      <Reset />
      <Timer isActive={isActive} onReset={handleReset}/>
    </div>

    </>
  );
}

export default Board;
