import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  //   redirected to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return (
      <p className=" w-full h-screen text-center font-bold text-red-500 flex justify-center items-center">
        Not authenticated!
      </p>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h2>
        <p className="text-gray-600 mb-4">Email: {user?.email}</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded cursor-pointer hover:bg-red-700"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
