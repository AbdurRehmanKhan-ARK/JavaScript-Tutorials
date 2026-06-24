// 1. EVERY & SOME (Boolean Condition Testers)

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Every: Checks if ALL items fulfill the block logic. Returns a single boolean.
console.log(myArr3.every((item) => item % 1 === 0)); // true

// Some: Checks if AT LEAST ONE item fulfills the block logic. Returns a single boolean.
console.log(myArr3.some((item) => item % 3 === 0)); // true

const names = ["abdur", "rehman", "osama", "ateeb", "talha"];
console.log(names.every((item) => item.length > 5)); // false

// 2. FILTER (Creates a shallow copy subset based on true/false conditions)

// Important: If you use curly braces {} in arrow function, you MUST explicitly type 'return'.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num % 2 === 0); // Implicit return
console.log(newNums); // [2, 4, 6, 8, 10]

// Real-Life Application Data Filtering Mockups
const books = [
  { title: "Book One", genre: "Fiction", publish: 1999, edition: 2001 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1979, edition: 2011 },
  { title: "Book Three", genre: "History", publish: 1899, edition: 2012 },
  { title: "Book Four", genre: "Science", publish: 1979, edition: 2023 },
  { title: "Book Five", genre: "Science", publish: 1779, edition: 2011 },
  { title: "Book Six", genre: "Non-Fiction", publish: 1789, edition: 2011 },
  { title: "Book Seven", genre: "Fiction", publish: 1922, edition: 2011 },
  { title: "Book Eight", genre: "History", publish: 1945, edition: 2011 },
  { title: "Book Nine", genre: "Fiction", publish: 1925, edition: 1999 },
  { title: "Book Ten", genre: "Comedy", publish: 1933, edition: 2013 },
];

const userBooks = books.filter((book) => book.genre === "Fiction");
const userBooksModern = books.filter(
  (book) => book.publish >= 1900 && book.genre === "Fiction",
);

// 3. MAP (Transforms every single item and returns a brand new mutated array)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums2 = nums.map((num) => num * 2);
console.log(newNums2);

// Method Chaining Mechanism: The output of the first map becomes input for the second array method
const newNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums4 = newNums3
  .map((num) => num * 10) // Step 1: Array converts to [10, 20, 30...]
  .map((num) => num + 1) // Step 2: Adds 1 to the newly generated array values
  .filter((num) => num > 50); // Step 3: Filters values from the updated numbers array
console.log(newNums4);

// 4. REDUCE (Combines/Reduces whole array elements into a single scalar output)

// Syntax: array.reduce((accumulator, current) => computation, initialValue)

const myNums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = myNums5.reduce(function (acc, currVal) {
  // Explanation: 'acc' catches the returned evaluation of the previous cycle.
  // On the very first execution loop, 'acc' takes the 'initialValue' parameter passed at the end (0).
  console.log(`acc: ${acc} + currVal ${currVal}`);
  return acc + currVal;
}, 0);

// Implicit arrow syntax execution
const total = myNums5.reduce((acc, currVal) => acc + currVal, 0);

// Real-Life Application Data Aggregation (E-commerce Order Total compilation)
const shoppingCart = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 10 },
  { name: "Gloves", price: 15 },
];

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTotal); // 125
