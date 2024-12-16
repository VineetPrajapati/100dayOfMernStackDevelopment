import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const { posts, loading, error } = useContext(BlogContext);

  if (loading) return <h2 className="text-center mt]">Loading post...</h2>;
  if (error) return <h2 className="text-center mt-6 text-red-500">{error}</h2>;
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}...</p>
            <Link
              to={`/post/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
  )
}

export default BlogCard