//  LEXICAL SCOPING & CLOSURES

// 1. LEXICAL SCOPING (Compile-time Scope Resolution)

function outer() {
  let username = "talha";
  // console.log(secret); // ReferenceError: secret is not defined (Parent cannot access child variables)

  function inner() {
    let secret = "my123";
    console.log(username); // Output: "talha" (Child function can access parent variables)
  }

  function innerTwo() {
    console.log(username); // Output: "talha"
    // console.log(secret); // ReferenceError: secret is not defined (Sibling functions cannot access each other's scope)
  }

  inner();
  innerTwo();
}
outer();

/*
   THEORETICAL DEFINITION:
   Lexical scoping means that the accessibility of variables is determined by the position of 
   the functions in the nested source code source structure. The JavaScript engine resolves 
   variable references by looking at the execution context's scope chain, moving upwards from 
   the current execution context to the outer lexical environments.
*/

// 2. CLOSURES (The Lexical Environment Retention)
function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName; // Returning the function reference, not invoking it
}

const myFunc = makeFunc();
myFunc(); // Output: "Mozilla"

/*
   THE INTERVIEW RAZOR: HOW DOES THIS WORK UNDER THE HOOD?
   
   Q: When makeFunc() finishes execution, its execution context is popped off the Call Stack, 
      and its local variables (like 'name') should be garbage collected. Why does myFunc() 
      still have access to 'name'?
   
   A: When a function is returned in JavaScript, it does not get returned alone. It returns 
      along with its entire Lexical Environment (its scope memory wrapper). A closure is 
      created whenever a function is defined inside another function, allowing the inner 
      function to remember and access its outer context's variables even after the outer 
      function has completely finished executing.
*/

/*
    3. MEMORY MANAGEMENT & GARBAGE COLLECTION PITFALL
   
   Q: What is the primary memory drawback of using closures excessively?
   
   A: Memory Leaks and delayed Garbage Collection.
   
   REASONING:
   Normally, when a function complete its execution, the engine's Garbage Collector (GC) 
   marks its variables for deletion to clear heap memory. 
   However, as long as the returned inner function reference (like 'myFunc') is alive and 
   accessible in your application, the engine cannot free the parent scope's memory. 
   The variables are held in memory permanently via the closure reference chain.
   
   FIX:
   Explicitly dereference the function variable when it is no longer needed:
   myFunc = null; // Clears the reference, enabling garbage collection for the closure scope.
*/

/* 
   4. PRACTICAL USE CASE: ENCAPSULATION / PRIVATE VARIABLES
 */

function createCounter() {
  let count = 0; // Completely private variable, inaccessible from the outside global scope

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount()); // Output: 2
// console.log(counter.count);    // Output: undefined (Strict encapsulation maintained)

/*
Lexical Scoping:
"Lexical scoping means variable access is strictly governed by the physical location of function declarations within the source code architecture. An inner function retains search access to its parent environment's identifier declarations based entirely on where it was written at compile-time."

Closures:
"A closure is an operational combination of a function bundled together with references to its surrounding state or lexical environment. It allows an inner function to retain memory state access to its parent container scope variables even after the outer function execution context has been terminated and popped off the call stack."
*/