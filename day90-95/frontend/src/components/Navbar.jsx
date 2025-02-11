import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link className="text-white text-xl font-bold">e-commerce</Link>

        {/* navigation links */}
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>

          {/* role based  */}

          {user?.role === "admin" && (
            <Link to="/admin" className="text-white">
              Admin Dashboard
            </Link>
          )}

          {user?.role === "seller" && (
            <Link to="/seller" className="text-white">
              Seller Dashboard
            </Link>
          )}

          {!token ? (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
