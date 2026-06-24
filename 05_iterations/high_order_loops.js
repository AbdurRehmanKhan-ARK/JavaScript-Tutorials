//  1. FOR-OF LOOP (Iterates over Iterable Objects values)

// Works on: Arrays, Strings, Maps, Sets.
// Does NOT work on: Plain Objects (because plain objects are not iterable by default).

const myArr = ["abdur", "rehman", "osama", "ateeb", "talha"];
for (const element of myArr) {
  // console.log(element);
}

const greetings = "hello world";
for (const greet of greetings) {
  // console.log(`Each character is ${greet}`);
}

// Maps: Key-Value pairs with unique keys that maintain insertion order
const myMap = new Map();
myMap.set("name", "Abdur Rehman");
myMap.set("age", 20);
myMap.set("email", "abdurrehmankhan@example.com");
myMap.set("email", "abdurrehmankhan@example.com"); // Overwrites the previous key's value, enforcing uniqueness.

// Destructuring [key, value] directly inside the for-of loop block
for (const [key, value] of myMap) {
  // console.log(`${key}: ${value}`);
}

//  2. FOR-IN LOOP (Iterates over Enumerable Properties keys)

// Best used for: Objects.
// Can be used on: Arrays (but it returns array indices as strings, not values).
// Does NOT work properly on: Maps (Maps properties are not enumerable this way).

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
  // Explanation: In JS, Arrays are underlying objects where indices (0,1,2..) act as keys.
  // 'key' here evaluates to string characters ("0", "1", "2"...), not actual numbers or values.
  // console.log(`${key} :- ${langs[key]}`);
}

// 3. FOR-EACH LOOP (Higher-Order Array Method)
// Explanation: It is an Array prototype method that takes a callback function.
// It automatically handles the iteration engine under the hood.

const myArr2 = ["abdur", "rehman", "osama", "ateeb", "talha"];

// Using traditional anonymous function callback
myArr2.forEach(function (element) {
  // console.log(element);
});

// Using modern Arrow function callback
myArr2.forEach((item) => {
  // console.log(item);
});

// Passing a pre-defined function reference (Do NOT invoke it here like printMe())
function printMe(item) {
  console.log(item);
}
// myArr2.forEach(printMe);

// Callback parameters signature: (item, index, wholeArray)
myArr2.forEach((item, index, array) => {
  // console.log(item, index, array);
});

// Real-world Pattern: Iterating over an Array of Objects (Standard Database API Response format)
const myCoding = [
  { language: "JavaScript", extension: "js" },
  { language: "Python", extension: "py" },
  { language: "HTML", extension: "html" },
  { language: "C++", extension: "cpp" },
  { language: "Ruby", extension: "rb" },
];

myCoding.forEach((item) => {
  console.log(item.language, item.extension); // Seamless object property extraction
});
