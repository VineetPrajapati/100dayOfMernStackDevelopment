import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const PostDetail = () => {
  const { id } = useParams();
  const { getPostById, loading, error } = useContext(BlogContext);
  const post = getPostById(id);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <h2 className="text-2xl font-bold text-blue-700">Loading post...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <h2 className="text-2xl font-bold text-red-600">{error}</h2>
      </div>
    );
  }
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <h2 className="text-2xl font-bold text-gray-600">Post not found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen py-6">
      <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl rounded-lg p-6 md:p-8">
          <h2 className="text-4xl font-extrabold text-gray-700 mb-4">
            {post.title}
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            {post.body}
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
          >
            Back to post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
