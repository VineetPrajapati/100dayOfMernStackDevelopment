// Dec 12, 2024
// Day 33: Introduction to custom hooks in React.

import useFetch from "./hooks/useFetch";

const App = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-gray-500 text-white font font-medium text-xl w-full flex flex-col justify-center items-center">
      <h1 className="underline font-bold text-3xl text-black m-4">Posts:</h1>
      <div className="border-4 border-red-300 rounded p-5 mb-4">
        <ul className="list-decimal list-inside">
          {posts.map((post) => (
            <li key={post.id} className="p-2">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
