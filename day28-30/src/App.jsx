// Dec 7-9, 2024

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
    
  );
};

export default App;
