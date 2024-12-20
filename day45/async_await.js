async function fetchMultiplePosts() {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data1 = await response1.json();
    console.log(data1);

    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data2 = await response2.json();
    console.log(data2);
    
  } catch (error) {
    console.log("Error encountered : ", error);
  }
}

fetchMultiplePosts()
