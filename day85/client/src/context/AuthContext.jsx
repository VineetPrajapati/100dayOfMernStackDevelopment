import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // check local storage for token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/protected", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.userId))
        .catch(() => logout());
    }
  }, []);

  // login
  const login = async (email, password) => {
    try {
      // console.log("Logging in with:", email, password)
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // console.log("Login response:", res.data);
      // console.log("token", res.data.user.id)

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user.id);
        setUser(res.data.user.id); // Update the user state
      } else {
        console.error("No token received");
      }

    } catch (err) {
      console.error("Login failded:", err.response?.data);
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;