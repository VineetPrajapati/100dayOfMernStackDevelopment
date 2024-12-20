const axios = require("axios");

async function fetchPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

fetchPost();