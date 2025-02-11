import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser(formData));
    if (!result.error) navigate("/profile");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-12 p-4 border rounded shadow-md"
    >
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-2 border my-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full p-2 border my-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
