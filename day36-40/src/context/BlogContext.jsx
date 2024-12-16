import { createContext, useState, useEffect } from "react";

// Create the context
const BlogContext = createContext();

// Provider component
const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the API
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const addPost = (newpost) =>
    setPosts([...posts, { id: posts.length + 1, ...newpost }]);

  const getPostById = (id) => posts.find((post) => post.id === Number(id));

  return (
    <BlogContext.Provider value={{ posts, getPostById, addPost, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
