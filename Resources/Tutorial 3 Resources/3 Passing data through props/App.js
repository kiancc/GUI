
function Square({value}){
  return (
    <button className="square">{value}</button>
  )
}


function App() {
  return (
    <>
    <div className="board-row">
      <Square value="🌾"/>
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
