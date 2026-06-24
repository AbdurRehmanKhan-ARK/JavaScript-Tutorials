// Truthy Values (Values that evaluate to true in a boolean context)
// true, "0", "false", " " (space inside string), [], {}, function(){}

const userEmail = "abdurrehmankhano@example.com";
if (userEmail) {
  // A filled string is truthy
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Falsy Values (Only 8 values evaluate to false in JavaScript)
// false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, NaN

// Checking empty arrays and objects safely:
const arr = [];
if (arr.length === 0) {
  // Arrays are objects; always check length, not the array itself
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  // Object.keys converts object keys to a temporary array
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??)
// It is a fallback safety feature strictly for 'null' and 'undefined' types
let val1;
val1 = null ?? 10; // Assigns 10 (triggers fallback because left is null)
val1 = undefined ?? 15; // Assigns 15 (triggers fallback because left is undefined)
val1 = 5 ?? 20; // Assigns 5 (5 is a valid data point)

/*
Crucial Interview Difference: ?? vs ||
|| (Logical OR) triggers fallback for ANY falsy value (0, "", false, null, undefined)
?? (Nullish Coalescing) ONLY triggers fallback for null or undefined.
*/
const userScore = 0;
const testOR = userScore || 100; // Returns 100 (because 0 is falsy, || skips it)
const testNullish = userScore ?? 100; // Returns 0   (0 is not null/undefined, ?? accepts it)

console.log(testOR);
console.log(testNullish);
