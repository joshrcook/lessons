
import React from 'react';
import './App.css';

function App() {
  const [number, setNumber] = React.useState(4);

  function goDown() {
    setNumber(number - 1);
  }

  function goUp() {
    setNumber(number + 1);
  }

  return (
    <div className="wrapper">
      <div>
        <div>{number}</div>
        <div>
          <button onClick={goDown}>-</button>
          <button onClick={goUp}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
