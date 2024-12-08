import { useContext } from "react";
import { CounterContext } from "./context/counterContext";

const App = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className=" w-full h-screen bg-gray-400 flex flex-col justify-center items-center text-2xl">
      <h1 className="font-bold text-3xl p-4" >Count is : {count}</h1>
      <button className="bg-blue-600 px-4 py-2 rounded m-2 w-36 hover:bg-blue-800 text-white font-normal" onClick={() => count < 20 && setCount(count + 1)}>Increment</button>
      <button className="bg-blue-600 px-4 py-2 rounded m-2 w-36 hover:bg-blue-800 text-white font-normal" onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
