// Dec 24, 2024
// Day 45: Introduction to promises and async/await.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response1) => response1.json())
  .then((data1) => {
    console.log(data1);
    return fetch("https://jsonplaceholder.typicode.com/posts/2");
  })
  .then((response2) => response2.json())
  .then((data2) => console.log(data2))
  .catch((err) => {
    console.log("Error :", err);
  });
