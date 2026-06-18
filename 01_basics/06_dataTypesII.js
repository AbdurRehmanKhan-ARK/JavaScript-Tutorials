// Premitive Data types
/*
7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
*/

// lets test symbol

const id = 123;
const anotherId = 123;
console.log(id == anotherId); // true

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 == symbol2); // false, because each symbol is unique, even if they have the same description.
console.log(symbol1 === symbol2); // false


// BigInt initialization
const bigNum = 1230346746904353n // BigInt literal, the n at the end indicates that this is a BigInt value.
console.log(typeof bigNum) // "bigint"


// Reference (Non Premitive) Data types
/*
allocates addresses in memory for the values, and the variables store the address of the value in memory, rather than the value itself.
Reference data types are objects, arrays, functions, etc.
*/

const marks = [94,74,79,90,100] // array of numbers
const student = // this is an object, which is a collection of key-value pairs, where the keys are strings and the values can be any data type, including other objects or arrays.
{
    name: "Abdur Rehman",
    age: 20,
    isStudent: true,
    marks: marks
}

// functions !, we can also assign function to a variable, and we can also pass functions as arguments to other functions, and we can also return functions from other functions.

const greet = function(name) {
    return `Hello ${name}!`
}

console.log(greet("Abdur Rehman")) // "Hello Abdur Rehman!"
console.log(typeof greet) // "function" because functions are also objects in JavaScript called object-functions, and they have properties and methods, just like other objects.

/*
javascript is a dynamically typed language, which means that the type of a variable is determined at runtime, and it can change during the execution of the program. This is in contrast to statically typed languages, where the type of a variable is determined at compile time and cannot change during the execution of the program.
*/
