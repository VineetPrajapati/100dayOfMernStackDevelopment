import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Blog <span className="text-yellow-300">App</span>
        </h1>
        <nav className="flex space-x-6">
          <Link
            className="hover:text-yellow-300 transition duration-300 text-lg font-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-yellow-300 transition duration-300 text-lg font-medium"
            to="/add"
          >
            Add Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
