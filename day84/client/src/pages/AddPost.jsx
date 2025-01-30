import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts/create", {
        title,
        content,
      });
      //   console.log("Blog added:", response.data);
      setTitle("");
      setContent("");
      navigate("/");
    } catch (err) {
      console.error("Error add post: ", err.response?.data || err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold m-4">Add a New Blog Post</h1>
      <form
        onSubmit={addBlog}
        className="py-8 px-6 border rounded-lg shadow-md bg-white"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 w-full rounded hover:bg-blue-600 cursor-pointer"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
