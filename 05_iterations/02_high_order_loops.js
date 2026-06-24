// 1. FOR-OF LOOP (Iterates over Iterable values directly)

// Works on: Arrays, Strings, Maps, Sets. Doesn't work on plain objects.

const myArr = ["abdur", "rehman", "osama", "ateeb", "talha"];
for (const element of myArr) {
  // console.log(element);
}

const greetings = "hello world";
for (const greet of greetings) {
  // console.log(`Each character is ${greet}`);
}

// Maps: Stores key-value pairs, maintains unique keys and insertion order.
const myMap = new Map();
myMap.set("name", "Abdur Rehman");
myMap.set("age", 20);
myMap.set("email", "abdurrehmankhan@example.com");
myMap.set("email", "abdurrehmankhan@example.com"); // Overwrites previous value to maintain unique keys.

// Destructuring [key, value] array directly on the fly inside for-of
for (const [key, value] of myMap) {
  // console.log(`${key}: ${value}`);
}

// 2. FOR-IN LOOP (Iterates over Enumerable property keys/indices)

// Works best for: Objects. Avoid using for-in on arrays for values.

const myObj = {
  JS: "JavaScript",
  CSS: "Cascading Style Sheets",
  HTML: "Hypertext Markup Language",
  CPP: "C++",
  RB: "Ruby",
};

for (let key in myObj) {
  // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const langs = ["JS", "CSS", "HTML", "CPP", "RB"];
for (let key in langs) {
  // Explanation: In JS, arrays are special objects where indices are numeric string keys.
  // 'key' here evaluates to string indices ("0", "1", "2"), not the array contents.
  // console.log(`${key} :- ${langs[key]}`);
}


// 3. FOR-EACH LOOP (Higher-Order Array Prototype Method)

// Expects a callback function. Does not return anything (returns undefined).

const myArr2 = ["abdur", "rehman", "osama", "ateeb", "talha"];

// Callback format A: Anonymous function
myArr2.forEach(function (element) {
  // console.log(element);
});

// Callback format B: Arrow function shortcut
myArr2.forEach((item) => {
  // console.log(item);
});

// Callback format C: Passing reference of an external pre-defined function
function printMe(item) {
  console.log(item);
}
// myArr2.forEach(printMe); // Pass the reference only, do not execute it like printMe()

// Signature parameters available inside forEach callback: (item, index, entireArray)
myArr2.forEach((item, index, array) => {
  // console.log(item, index, array);
});

// Real-world Use Case: Processing Array of Objects (Standard Database/API payload structure)
const myCoding = [
  { language: "JavaScript", extension: "js" },
  { language: "Python", extension: "py" },
  { language: "HTML", extension: "html" },
  { language: "C++", extension: "cpp" },
  { language: "Ruby", extension: "rb" },
];

myCoding.forEach((item) => {
  console.log(item.language, item.extension);
});
