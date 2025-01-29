import { useEffect, useState } from "react";
import axios from "axios";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    } catch (err) {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", { title, content });
      setBlogs([...blogs, response.data]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
      <form onSubmit={addBlog} className="mb-4 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Add a New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          name="content"
          id="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog._id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
