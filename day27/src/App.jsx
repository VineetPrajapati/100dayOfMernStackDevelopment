import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link to="/">Home</Link>
      <Outlet />      
    </div>
  );
};

export default App;
