function setUsername(username) {
  this.username = username;
  console.log("called");
}

// function createUser(username, email, password) {
//   setUsername(this, username);
//   this.email = email;
//   this.password = password;
// }
// const chai = new createUser("chai", "code@example.com", "admin123");
// console.log(chai);

// output:
//  called
// createUser { email: 'code@example.com', password: 'admin123' } ??? username where??

// although the function setUsername is called but still it didnt set the username because this inner function was vanished from the call stack after being called and its scope was destroyed ( attributes that were set are destroyed too) so we need to hold its reference using .call method and an extra parameter "this" is passed to the inner function so that the attributes are returned to outer function once the inner function is executed and popped out from the call stack

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const chai = new createUser("chai", "code@example.com", "admin123");
console.log(chai);

//    .call() vs .apply() vs .bind()

// .call(thisArg, arg1, arg2, ...)  — arguments comma separated, function executes and gone
setUsername.call(this, username);

// .apply(thisArg, [arg1, arg2, ...]) — arguments ARRAY mein deta hai, function executes and gone
setUsername.apply(this, [username]);

// .bind(thisArg, arg1, arg2, ...)  — function does not execute at this time, returns a new function that can be called at a later time

const boundFn = setUsername.bind(this, username);
boundFn(); // ab chalega

// TRICK to remember:
// call  => Comma separated, runs now
// apply => Array, runs now
// bind  => returns Bound function, run later

// Real world use case:
// When a function wants to borrow 'this' from another function.
// Use .call() karo - manually injects this into the inner function.
