import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/"><h1 className="text-2xl font-extrabold tracking-wide">
          Blog <span className="text-yellow-300">App</span>
        </h1></Link>
        
        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link
            className="text-white hover:text-yellow-300 transition duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-yellow-300 transition duration-300"
            to="/add"
          >
            Add Post
          </Link>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-blue-700 to-blue-500 py-6">
          <ul className="space-y-4 text-center">
            <li>
              <Link
                className="block text-xl text-white hover:text-yellow-300 transition duration-300"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block text-xl text-white hover:text-yellow-300 transition duration-300"
                to="/add"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Post
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
