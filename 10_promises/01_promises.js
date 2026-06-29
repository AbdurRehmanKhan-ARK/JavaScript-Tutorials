// What are Promises in JS
// Promises are a way to handle asynchronous operations in JS,
// The 'Promise' object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise is one of these states:
// pending:   initial state, neither fulfilled nor rejected — like an order placed at a restaurant
// fulfilled: operation completed successfully — order delivered
// rejected:  operation failed — order cancelled

// TRICK: Promise constructor always takes two parameters — resolve and reject
// resolve() => operation succeeded, pass the result
// reject()  => operation failed, pass the error reason
// you only ever call ONE of them — not both

const promise_1 = new Promise(function (resolve, reject) {
  // DB calls, cryptography, network — anything that takes time
  setTimeout(() => {
    console.log("Operation completed");
    resolve(); // signals success — .then() will now run
  }, 1000);
});

// .then() runs when resolve() is called
// .catch() runs when reject() is called
// TRICK: .then() and .catch() always return a new Promise — that's what makes chaining possible
promise_1.then(function () {
  console.log("Promise Consumed");
});

// inline Promise — no variable needed, chain directly
// useful for one-off operations you don't reuse
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Operation 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

// passing DATA through resolve — most common real-world use case
// whatever you pass to resolve() becomes the parameter in .then()
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "code@example.com" }); // data passed here
  }, 1000);
}).then(function (user) {
  console.log(user); // user = { username: "chai", email: "code@example.com" }
});

// CHAINING EXAMPLE — most important pattern to understand
// each .then() receives what the previous .then() returned
// .catch() catches errors from ANY step above it — not just the last one
// .finally() always runs — whether resolved or rejected (like a cleanup step)
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "chai", password: "admin876" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});

promise4
  .then((user) => {
    console.log(user); // full object
    return user.username; // pass only username to next .then()
  })
  .then((username) => {
    console.log(username); // "chai" — only the username
  })
  .catch(function (error) {
    console.log(error); // only runs if reject() was called anywhere above
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected"); // always runs — good for hiding loaders
  });

// TRICK: when to use .then()/.catch() vs async/await
// .then()/.catch() => when chaining multiple steps, reading left to right feels natural
// async/await      => when you need results of one call before making the next, reads like sync code
// both do the same thing — async/await is just cleaner syntax for the same Promise underneath

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "C++", password: "admin876" });
    } else {
      reject("Error: C++ went wrong");
    }
  }, 2000);
});

// WRONG — no error handling, Node will throw UnhandledPromiseRejection
async function consumePromise5() {
  const response = await promise5;
  console.log(response);
}

// CORRECT — always wrap await in try/catch
// await pauses execution until the promise settles — but only inside async functions
// TRICK: await can only be used inside an async function — never at the top level in older JS
async function asyncConsumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error); // "Error: C++ went wrong"
  }
}
asyncConsumePromise5();

// FETCH — modern replacement for XHR
// fetch() always returns a Promise
// TRICK: TWO awaits needed — one for the network response, one for parsing JSON
// because response.json() is ALSO async (the body streams in separately from the headers)

// async/await style — cleaner, easier to debug
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // wait for headers
    const data = await response.json(); // wait for body to parse
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
// getAllUsers();

// .then() style — same thing, different syntax
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // implicit return — no {} needed for single line
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// WHEN TO USE WHICH:
// Simple one request             => fetch().then().catch()
// Multiple dependent requests    => async/await with try/catch
// Parallel requests              => Promise.all([p1, p2, p3]) — runs all at once, waits for all
// First one to finish wins       => Promise.race([p1, p2, p3])

// terminal me fetch ka data pehle aaya, phir setTimeout wale promises.
/* becase
fetch() result    => Microtask Queue  (HIGH priority)
setTimeout()      => Callback Queue   (LOW priority)
*/
