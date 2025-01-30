import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");
      setBlogs(response.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold cursor-pointer">Blog Posts</h1>
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Post
        </Link>
      </div>

      <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-2">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700 text-justify">{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
