// Dec 04, 2024
// Day 25: Build small components like counters and buttons to reinforce props and state.

import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="counter_container">
      <h1>Count: {count} </h1>
      <Button text="Increment" onClick={increment} />
      <Button text="Decrement" onClick={decrement} disabled={count === 0} />
    </div>
  );
};

export default App;
