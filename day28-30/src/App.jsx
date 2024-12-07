// Dec 7-9, 2024

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer className="container mx-auto p-4 text-center">
        <p className="text-gray-600 text-xl">© simple blog app</p>
      </footer>
    </div>
    
  );
};

export default App;
