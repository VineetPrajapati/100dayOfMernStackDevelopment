/*
1. The DOM is a tree-like representation of our HTML document, where each element is a node.
2. It allows javascript to access and manipulate HTML and CSS dynamically.
*/

// selecting an element id by using getElementById
console.log(document.getElementById("header"));

/*
1. "querySelector" : Selects the first element that matches a CSS selector.
2. "querySelectorAll" : Selects all elements that matches a CSS selector
*/

console.log(document.querySelector(".item"));
console.log(document.querySelectorAll(".item"));

/*
"getElementByClassName" : Selects elements by their class name.
"getElementByTagName" : Select elements by their tag name.

*/
console.log(document.getElementsByClassName("text"));
console.log(document.getElementsByTagName("p"));

// Modification of DOM Elements

document.getElementById("header").innerHTML = "Hello world!"; //innerHTML -> sets or gets the content inside an element.
document.getElementById("header").textContent = "Hello!"; //innerHTML -> sets or gets the text content inside an element.

// modifying attributes
const logo1 = document.getElementById("logo");
logo1.setAttribute("alt", "Upadated Logo");
console.log(document.getElementById("logo"))
console.log(logo1.getAttribute("src"));

// modifiying styles; change the inline styles of an element using the "style" property

const hello = document.getElementById("header");
hello.style.color = "red";
hello.style.backgroundColor = "Yellow"

// Adding and removing elements
// createElement to create a new element and appendChild to add it to the DOM.
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv);

// Remove Element
// Use removeChild or remove() to delete an element.
const header = document.getElementById("header");
header.remove();

/* DOM manipulation often involves responding to user actions like clicks, mouse movements, or keypresses */
// Use addEventListener to listen for events on elements.

const btn = document.getElementById("btn");
btn.addEventListener("click", () => alert("Button Clicked"))



