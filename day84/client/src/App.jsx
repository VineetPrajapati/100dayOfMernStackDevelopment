import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
const App = () => {
  return <div className="min-h-screen bg-gray-100">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPost />} />
      {/* <Route path="" element={<Home />} /> */}
    </Routes>
    
  </div>;
};

export default App;
