import { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss";
const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  const addBlog = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/blogs", { title, content });
      setBlogs([...blogs]);
      setTitle("");
      setContent("")
      fetchBlog();
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    await axios
      .get("http://localhost:8000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  };
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Blogs List</h1>
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-10 border-t-2 border-gray-300" />

      <div className="max-w-lg mx-auto">
        <form
          onSubmit={addBlog}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Add Blog</h1>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 my-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 my-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition">Add Blog</button>
        </form>
      </div>
    </>
  );
};

export default App;
