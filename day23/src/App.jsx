// Dec 02, 2024
// Day 23: State management with useState.

import { useState } from "react";
import "./App.css";

const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Count: {Count}</h1>
      <div className="btn-container">
        <button onClick={() => setCount(Count + 1)}>Increment</button>
        <button
          onClick={() => Count > 0 && setCount(Count - 1)}
          disabled={Count === 0}
        >
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(Count * 2)}>Double</button>
      </div>
    </div>
  );
};

export default App;
