// 🌐 JAVASCRIPT DOM INTRODUCTION (The Browser Engine API)

// 1. Core Structure Verification (Run these in Browser Inspect Console)
// console.log(window);       // Global window blueprint
// console.log(document);     // Raw DOM HTML document
// console.dir(document);     // HTML represented completely as a functional JS Object

/*  INTERVIEW PARADIGM: 
Every HTML tag is parsed as an object node. 
<h1 id="title">Hello</h1> converts into -> { id: "title", innerHTML: "Hello", style: {...} }
*/

//  2. BASIC DOM SELECTORS

// A. Selection via ID (Returns a single unique Element Object Node)
const mainHeading = document.getElementById("title");

// B. Selection via Class Name (Returns an HTMLCollection - Array-like but lacks array prototype methods)
const tempClassList = document.getElementsByClassName("list-item");

// C. Selection via Modern Query Selector (Returns the VERY FIRST matching element node)
const firstHeading = document.querySelector("h1");
const uniqueBox = document.querySelector("#title");
const activeClass = document.querySelector(".active");
const myUl = document.querySelector("ul");

// querySelectorAll returns a NodeList collection.
// You CANNOT directly change styles on the collection without looping or targeting an index.
const singleLi = document.querySelector("li"); // Targets only the 1st <li> element node safely
if (singleLi) {
  singleLi.style.color = "green";
  singleLi.innerText = "Hi I am First Element - I am green now";
}

// D. Selection via Query Selector All (Returns a NodeList collection)
const allParagraphs = document.querySelectorAll("p");
const allFirstHeadings = document.querySelectorAll("h1");
const list = document.querySelectorAll("li");

list.forEach(function (item) {
  item.style.color = "yellow"; // Works perfectly because loop targets individual elements sequentially
});

//  3. HTMLCollection vs NodeList vs Array INDEPTH BOUNDARIES

// NodeList: Supports .forEach() natively, but lacks full map/filter/reduce prototypes.
allParagraphs.forEach((para) => {
  // para.style.color = 'orange';
});

// HTMLCollection: Does NOT support native .forEach loops. Throws TypeErrors if tried.
// Must be manually converted into a real array:
const pureArray = Array.from(tempClassList);
pureArray.forEach((item) => {
  // item.style.backgroundColor = 'yellow';
});

// 4. ATTRIBUTES & CONTENT MANIPULATION (The Core Mechanics)

// Reference the actual DOM element first
const titleElement = document.getElementById("title");

// Extracting Attribute properties safely
const extractedClass = titleElement.getAttribute("class"); // => Returns string 'heading'
// console.log(extractedClass);

// Modifying element inline CSS styles through object reference
titleElement.style.backgroundColor = "green";
titleElement.style.borderRadius = "10px";
titleElement.style.padding = "10px";

/* CRUCIAL INTERVIEW TOPIC: Content Extraction Properties Differences:
Assume HTML node is: <h1 id="title">Hello <span style="display: none">World</span></h1>
*/

// 1. textContent: Returns full text markup inside the node, IGNORING any CSS hidden rules ('display: none' content is visible)
// console.log(titleElement.textContent); // Output: "DOM Learning with Hitesh Bhai test text"

// 2. innerText: Returns only the visible clean text content currently being rendered on screen (Respects CSS styling locks)
// console.log(titleElement.innerText);   // Output: "DOM Learning with Hitesh Bhai"

// 3. innerHTML: Returns entire literal child nodes including raw nested HTML tag strings completely
// console.log(titleElement.innerHTML);   // Output: "DOM Learning with Hitesh Bhai<span style=\"display: none\">test text</span>\n"
