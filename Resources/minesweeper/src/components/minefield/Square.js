import React from 'react';

function Square({value, onSquareClicked}){
  let myValue;
  if(value === null){
    const myValues = ['🌿'] //['🌻', '🌿'] 
    let icon = Math.floor(Math.random() * myValues.length);
    myValue = myValues[icon]
    // myValue = '🌾';
  }else if (value === 'X'){
    myValue = '🍳';
  }else{
    myValue = value;
  }

  return (
    <button className="square" onClick={onSquareClicked}>{myValue}</button>
  )
}

export default Square;



