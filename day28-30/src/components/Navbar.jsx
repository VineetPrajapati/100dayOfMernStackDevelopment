import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container max-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg font-bold">Simple Blog</h1>
        </Link>
        <div className="space-x-4">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:underline" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
