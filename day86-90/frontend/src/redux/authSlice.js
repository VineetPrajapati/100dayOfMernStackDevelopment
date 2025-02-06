import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ||  null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
});

export const { registerUser, loginSuccess, logout } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const res = await axios(
      "http://localhost:8080/api/auth/login",
      credentials
    );
    dispatch(loginSuccess(res.data)); // save user & token in redux
  } catch (err) {
    console.error("Login failed", err);
  }
};

export default authSlice.reducer;
