import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-1/2 h-10 bg-red-500 rounded-xl m-10">
      <ul className="flex justify-around p-2 gap-2">
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Home;
