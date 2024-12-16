import BlogCard from "../components/BlogCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
        <div className="container mx-auto font-extrabold py-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Explore Our Blog Posts
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Stay updated with the latest trends and insights. Dive into our
            curated content!
          </p>
        </div>

        <BlogCard />
      </div>
    </>
  );
};

export default Home;
