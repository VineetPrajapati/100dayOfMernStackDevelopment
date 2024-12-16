// Dec 15-19, 2024
// Day 36-40: Build a React project (e.g., a blog or e-commerce frontend) that uses state, context, and routing.

import { BlogProvider } from "./context/BlogContext";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import AddPost from "./pages/AddPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPost />}/>
      <Route path="/post/:id" element={<PostDetail />} />
    </>
  )
);

const App = () => {
  return (
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  );
};

export default App;
