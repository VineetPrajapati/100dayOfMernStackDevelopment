import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => setMessage(response.data.message))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setMessage("Failed to load data")
      });
  }, []);

  return (
    <div>
      <h1>React & Express Integration</h1>
      <p>Server Message: {message}</p>
    </div>
  );
};

export default App;
