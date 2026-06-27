// Theory on synchronous vs asynchronous JS

// JS is single-threaded, meaning it can only execute one thing at a time and at one thread, also means synchronous.
// it never lets you feel that its single threaded because a task is waiting for another task to complete and task delegation is used to handle this.
// non-blocking because it uses an event-driven architecture rather than waiting for time-consuming tasks (like fetching data or reading files) to finish making the code non-blocking i.e asynchronous.

/*
    console.log("1")
    fetch("https://api.example.com")  // browser ko de diya kaam
    console.log("3")  // fetch ka wait nahi kiya, seedha chal gaya
*/

// each operation waits for the previous operation to complete and then executes the next one.
// this is synchronous because it waits for the previous operation to complete and then executes the next one.

/*
    console.log("1")
    console.log("2")  // 1 ke baad chalega
    console.log("3")  // 2 ke baad chalega
*/

// there's no runtime engine solely for js but it has a runtime environment such as nodejs or browser.

// Execution Context

// JS has a global execution context and a function execution context.

// Call Stack - Execution
// When a function is called, it is pushed onto the stack.
// When the function finishes, it is popped off the stack.

// Web APIs - The browser's built-in capabilities
// setTimeout,  DOM events — the browser handles these, not JS.

// Callback Queue — Completed async tasks wait here. setTimeout, setInterval, requestAnimationFrame, DOM events, all are transferred to the callback queue then to the call stack, meanwhile instructions are executed. example

/*
    console.log("1")
    setTimeout(() => {
        console.log("2")
    }, 0)
    console.log("3") 
*/

// although setTimeout is 0 it doesnt mean that it will run immediately. it will be pushed to the callback queue and then to the call stack. meanwhile other instruction console.log("3") will be executed.

// okay but fetch has a concept name promise, fetch's result has its microtask queue having a high priority than callback queue. so fetch will be executed first and then callback queue will be executed.
// Microtask Queue vs Callback Queue (Task Queue)
// fetch (Promises) => Microtask Queue — HIGH priority
// setTimeout, setInterval => Callback Queue — LOW priority
// Event Loop pehle Microtask Queue empty karta hai, phir Callback Queue

/*
    console.log("1")
    
    setTimeout(() => console.log("setTimeout"), 0)  // callback queue
    
    Promise.resolve().then(() => console.log("promise"))  // microtask queue
    
    console.log("4")
    
    // Output:
    // 1
    // 4
    // promise   - pehle, even though setTimeout 0ms tha
    // setTimeout - baad mein
*/

// Event Loop - It keeps checking:

// "Is the call stack empty? Yes? Then pick up a task from the callback queue."

// All of this together makes JS feel non-blocking i.e asynchronous
// even though JS itself is single-threaded.

// confusion ho jaye is liye yaha likh rha hu. JS asynchronous language h but uska default behaviour synchronous hota h. Us behavior ko hame forcefully bta kr async bnana pdta h. Sbse easy example h aapke settimeout or setinterval methods
// we can never say which one is the best, sync or async executions, because it all depends on the use case.
