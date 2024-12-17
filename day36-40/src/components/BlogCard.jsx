import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const BlogCard = () => {
  const { posts, loading, error } = useContext(BlogContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const totalPage = Math.ceil(posts.length / postPerPage);

  // Get posts for the current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (error) return <h2 className="text-2xl font-extrabold text-center mt-6 text-red-500">{error}</h2>;
  if (loading) return <h2 className="text-4xl font-extrabold text-center mt-6]">Loading post...</h2>;
  return (
    <div>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => {
          const randomImages = `https://picsum.photos/300/200?random=${post.id}`;
          const bgColorClasses = [
            "bg-blue-100",
            "bg-green-100",
            "bg-yellow-100",
            "bg-red-100",
          ];
          const bgColor = bgColorClasses[post.id % bgColorClasses.length];

          return (
            <div
              key={post.id}
              className={`rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transit duration-300 ${bgColor}`}
            >
              {/* Random Images */}
              <img
                src={randomImages}
                alt="Blog Post"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              {/* blog */}
              <div className="p-4 flex flex-col">
                <h3 className="text-xl md:text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {post.body.slice(0, 100)}...
                </p>
                <Link
                  to={`/post/${post.id}`}
                  className="text-blue-600 hover:underline font-medium self-start"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}

        {/* Pagination */}
      </div>
      <div className="mt-6 pb-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogCard;
