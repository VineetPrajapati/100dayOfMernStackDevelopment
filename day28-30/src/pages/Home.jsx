import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const posts = [
//   {id: 1, title: "First Blog Post"},
//   {id: 2, title: "Second Blog Post"},
//   {id: 3, title: "Third Blog Post"},
// ];

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const respose = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await respose.json();
        // console.log(data);
        
        setPosts(data.slice(0,20));
        
      } catch (error) {
        console.log(`Error fetching posts : ${error}`);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-gray-100 p-4 rounded shadow hover:shadow-lg"
          >
            <img src={post.thumbnailUrl} alt={post.title} />
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 text-2xl hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
