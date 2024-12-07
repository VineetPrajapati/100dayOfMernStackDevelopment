import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-700 mb-4">
        The page you are looking for does not exits.
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
