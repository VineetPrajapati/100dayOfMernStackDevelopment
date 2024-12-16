import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const PostDetail = () => {
  const { id } = useParams();
  const { getPostById, loading, error } = useContext(BlogContext);
  const post = getPostById(id);

  if (loading) return <h2 className="text-center mt-6">Loading post...</h2>;
  if (error) return <h2 className="text-center mt-6 text-red-500">{error}</h2>;
  if (!post)
    return <h2 className="text-center mt-6 text-red-500">Post not found!</h2>;

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4 text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostDetail;