import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const AddPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const { addPost } = useContext(BlogContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, body });
    navigate("/");
  };
  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1 font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold">Content</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="5"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
