// here we will learn about memory management in JavaScript

// in JavaScript, memory management is handled automatically by the JavaScript engine, which uses a technique called garbage collection to free up memory that is no longer being used by the program.

// when we create a variable or an object, the JavaScript engine allocates memory for it, and when we are done with it, the engine will automatically free up that memory for us.

// Stack Vs Heap
// the stack is a region of memory that is used for storing primitive values and function calls, while the heap is a region of memory that is used for storing objects and arrays (non-primitive).

let myName = "Abdur Rehman" 
let nickname = myName // here we are copying the value of myName to nickname, so both variables point to the same string in memory, and if we change the value of myName, it will not affect nickname, because they are both primitive values and they are stored in the stack.

myName = "Abdur Rehman Khan" // here we are changing the value of myName, but it does not affect nickname, because they are both primitive values and they are stored in the stack.
console.log(myName) // "Abdur Rehman Khan"
console.log(nickname) // "Abdur Rehman"

let userOne = {
    email: "abdurrehman@gmail.com",
    name: "Abdur Rehman",
}

let userTwo = userOne // here we are copying the reference of userOne to userTwo, so both variables point to the same object in memory, and if we change the value of userOne, it will affect userTwo, because they are both reference values and they are stored in the heap.

userTwo.name = "Abdur Rehman Khan" // here we are changing the value of userTwo, but it also changes the value of userOne, because they are both reference values and they are stored in the heap.
console.log(userOne.name) // "Abdur Rehman Khan"
console.log(userTwo.name) // "Abdur Rehman Khan"

// conclusion: when we assign a primitive value to a variable, we are copying the value to the variable, and when we assign a reference value to a variable, we are copying the reference to the variable, which means that both variables point to the same object in memory, and if we change the value of one variable, it will affect the other variable as well.