import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const posts = {
//   1: "Content for the first post",
//   2: "Content for the second post",
//   3: "Content for the third post",
// };
const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchPost()
  }, [id]);

  if(error){
    return <h1 className="text-center text-red-600">{error}</h1>
  }

  if(!post){
    return <h1 className="text-center">Loading...</h1>
  }
  // const content = posts[id];
  // if(!content){
  //   return <h1 className="text-center text-red-600">Post Not Found </h1>
  // }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.id}  {post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default Post;
