import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { addPost } = useContext(BlogContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addPost({ title, body });
      navigate("/");
    }, 1000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 py-6 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter your post title"
              className="w-full px-4 py-2 border border-r-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="6"
              required
              placeholder="Write your post content here..."
              className="w-full px-4 py-2 border border-r-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-4 py-2 text-lg font-semibold text-white rounded-lg shadow-md ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600  hover:bg-blue-700 transition duration-300"}`}
          >
            {isSubmitting ? (<div className="animate-spin h-5 w-5 border-white border-t-transparent rounded-full"></div>) : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
