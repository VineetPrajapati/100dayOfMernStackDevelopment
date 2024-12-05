// day24
// Dec 03, 2024

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setTitle(data);
        // console.log(title);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [title]);

  return (
    <div className="container">
      <h1>useEffect</h1>
      <ul>
        {title.map((post, index) => (
          <div key={index} className="list">
            <h4>{post.id}.</h4>
            <li>{post.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
