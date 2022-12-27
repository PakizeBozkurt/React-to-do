import React from 'react';

//let isDone = false;

function strike() {
document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Done</button>
      <button onClick={unStrike}>Come back</button>
    </div>
  ); 
}

export default App;



