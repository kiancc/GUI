import {useState} from 'react';

function Square({value, onSquareClicked}){
  return (
    <button className="square" onClick={onSquareClicked}>{value}</button>
  )
}


function App() {

  const [square, setSquare] = useState(null);

  function handleClick(){
    setSquare('X');
  }

  return (
    <>
    <div className="board-row">
      <Square value={square} onSquareClicked={handleClick}/>
      <Square value="🌾"/>
      <Square value="🌾"/>
    </div>
    <div className="board-row">
      <Square value="🌾"/>
      <Square value="📌"/>
      <Square value="🌾"/>
    </div>
    <div className="board-row">
      <Square value="🌾"/>
      <Square value="🌾"/>
      <Square value="🌾"/>
    </div>
    </>
  );
}

export default App;
