import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Blog App</h1>
        <nav>
          <Link className="px-4" to="/">
            Home
          </Link>
          <Link className="px-4" to="/add">
            Add Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
