// SINGLETON

// object literals
const JSuser = {
    name: "Abdur Rehman",
    "full name": "Abdur Rehman Khan",
    age: 20,
    location: "Karachi",
    email: "abdurrehmankhano@example.com",
    isLoggedIn: true,
} // objects are also called objects literals, and they are used to create objects in JavaScript. they are key-value pairs, and the keys are strings, and the values can be any data type, including other objects or arrays.   

// we can access attributes via dot and bracket notation
console.log(JSuser.email) // abdurrehmankhano@example.com
console.log(JSuser["email"]) // abdurrehmankhano@example.com
// you cannot access full_name attribute via dot access that's why we use bracket notation

// lets see how to define a symbol and access it in an object

const id = Symbol("id")
const JSuser2 = {
    name: "Abdur Rehman",
    "full name": "Abdur Rehman Khan",
    age: 20,
    location: "Karachi",
    email: "abdurrehmankhano@example.com",
    isLoggedIn: true,
    [id]: 123, // This is the correct way to define a symbol and access it in an object.
}
console.log(JSuser2) // it will show 123 as Symbol in output not as a string

Object.freeze(JSuser2) // this will freeze the object, so that we can't add new properties to it, and we can't delete properties from it, and we can't change the values of existing properties

JSuser.greetings = function(){
    console.log("Hello " + this.name) // this points to the object that is calling the function
}

console.log(JSuser.greetings())
// what if we write
console.log(JSuser.greetings)
// it will show the function definition, not the function call

// okay lets understand how const is not immutable in terms of const object

const a = 10
/*
a = 20
console.log(a) // this will throw error => Assignment to constant variable.
*/

// because const is immutable in terms of variables as the value of const is stored in stack memory which is immutable, so we cannot change the value of const variable, but we can change the value of const object

const b = {name: "Abdur Rehman"}
b.name = "Abdur Rehman Khan"
console.log(b) // this will be okay because object is stored in heap memory which is mutable

/*
because non-primitive data types are mutable on heap memory, because values are stored in heap memory but the stack memory is immutable (cannot be changed), stack memory references the heap memory via address pointer and non-primitive data types are stored in heap memory which is mutable.
*/
