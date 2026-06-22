const user = {
  username: "Abdur",
  price: 899,

  welcomeMessage: function () {
    console.log(`Welcome to Website ${this.username}`); // this is used to reference current object
    console.log(this); // prints the current object which is user
  },
};

user.welcomeMessage();
user.username = "rafay";
user.welcomeMessage(); // context changed to new object with new username

console.log(this); // Prints {} in a Node.js file module wrapper, but window in a browser environment.

// In NodeJS environment, the global object at root is 'global' but module-level 'this' is an empty object {}
// While in browser, the global object is 'window', which catches all DOM events (click, form submit etc.)

function tea() {
  tea.username = "rafay";
  console.log(this.username); // undefined: Function ke andar 'this' kabhi bhi us function ko khud ko point nahi karta!
}
tea();

// ---------------- ARROW FUNCTIONS & EXPLICIT vs IMPLICIT RETURN ----------------

// 1. Explicit Return (Must use 'return' keyword when using curly braces {})
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2. Implicit Return (No curly braces, no 'return' keyword needed. Best for single-line logic)
const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(2, 3)); // Output: 5

// -----------------------------------------------------------------------------
// 🔥 INTERVIEW DEEP DIVE: THE "THIS" BINDING MYTH (Ratta vs Reality)
// -----------------------------------------------------------------------------
/*
  🚨 RATTA ANSWER (What 90% of candidates say):
  "Arrow functions don't support the 'this' keyword, it only works in normal functions." -> WRONG/INCOMPLETE.

  ⚡ REALITY / MECHANICAL REASON (What FAST students say):
  1. Standard Functions have DYNAMIC BINDING. The value of 'this' is decided at CALL-TIME 
     based on WHO invoked the function (e.g., user.welcomeMessage() points to user).
     
  2. Arrow Functions have LEXICAL BINDING. They DO NOT have their own 'this' context. 
     Instead, they inherit 'this' from their parent execution scope at DECLARATION-TIME.

  EXAMPLE:
  If an arrow function is declared inside a global object literal, the object literal 
  does not create a new scope. The parent scope is the Global/Module environment. 
  Hence, an arrow function inside an object method will look outside and print {} (Node) or window (Browser), 
  returning 'undefined' for object properties.
*/