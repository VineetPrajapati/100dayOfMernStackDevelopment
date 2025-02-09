import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (!result.error) navigate("/profile");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-12 p-4 border rounded shadow-md"
    >
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full p-2 border my-2"
      />
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
      <select
        name="role"
        id="role"
        onChange={handleChange}
        className="w-full p-2 my-2"
      >
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
