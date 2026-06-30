// Magic of Prototype in JavaScript

//   What is a Prototype
// Every JS object has a hidden internal link to another object — called its PROTOTYPE.
// When you try to access a property/method that doesn't exist on the object itself,
// JS automatically looks it up on the prototype and it keeps doing this (chaining up) parent accessing until it finds it or NULL, this is called the PROTOTYPE CHAIN.

// array , function, string ----> Object -----> null
// TRICK: this is why arrays have .map(), .filter(), .push() etc even though
// you never wrote them — they live on Array.prototype, and every array
// you create is automatically linked to it.

const arr = [1, 2, 3];
// it is recommended to do these operations on browser console for a better understanding
console.log(arr.__proto__); // Array.prototype — has map, filter, push...
console.log(arr.__proto__.__proto__); // Object.prototype — has toString, hasOwnProperty...
console.log(arr.__proto__.__proto__.__proto__); // null — end of the chain

function multiplyBy5(num) {
  return num * 5;
}

// function is a function but also references to object with properties
multiplyBy5.power = 2;
console.log(multiplyBy5(5)); // 25 ezi
console.log(multiplyBy5.power); // 2 , but why, how is it possible? What is the magic of prototype?
console.log(multiplyBy5.prototype); // undefined

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// createUser.prototype.incrementScore = function(){
//     score++ (to understand the topic)
// }
createUser.prototype.incrementScore = function () {
  this.score++;
};
const chai = new createUser("chai", 100);
const tea = new createUser("tea", 200);

console.log(chai); // { username: 'chai', score: 100 }
console.log(tea.incrementScore()); // undefined
console.log(chai.incrementScore()); // undefined , but why because it says score++
// ReferenceError: score is not defined, we need to use this.score, to properly mention whose score to increment
console.log(tea); // { username: 'tea', score: 201 }
console.log(chai); // { username: 'chai', score: 101 }

// lets again understand the importance of new keyword
createUser.prototype.printMe = function () {
  console.log(`My name is ${this.username} and my tea price is ${this.score}`);
};

// const tea1 = createUser('tea',200)
// const tea2 = createUser('tea',200)
// console.log(tea1.printMe())
// console.log(tea2.printMe())

// wont run, because the properties were injected (printMe and incrementScore into createUser via prototye, so to initialize a new instance of previous attributes, we need to use new keyword), remember injection is done in the createUser.prototype (inside object) not inside the createUser function itself
const t1 = new createUser("t1", 200); // new keyword calls this keyword which points to this current object not the global object, otherwise without this (eventually without new) this => global object which is not what we want (undefined)
const t2 = new createUser("t2", 200);

console.log(t1.printMe()); // My name is t1 and my tea price is 200
console.log(t2.printMe()); // My name is t2 and my tea price is 200
// Both t1 and t2 do not have their own printMe — when you write t1.printMe(), JS first looks inside T1, if it doesn't find it, it looks in t1.__proto__ (which is createUser.prototype) — which has printMe method.

const myName = "Abdur Rehman Khan       ";
// console.log(myName.myTrueLength); // ye kese hoga
// i want such a method to remove the extra spaces for all strings,

let myHeroes = ["thor", "spiderman", "ironman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  ironman: "suit",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.abdur = function () {
  console.log("abdur is present in all objects");
};

// so now for myHeroes and other objects, .abdur technically should be available for
myHeroes.abdur();
myName.abdur(); // tusi to ggreat ho, prototype injection seekgye ho
// but no, we want it only for arrays (no other object literals)
Array.prototype.heyAbdur = function () {
  console.log("hey abdur");
};

myHeroes.heyAbdur(); // yes, you are an array so you can use .heyAbdur
// myName.heyAbdur(); // nope, you are string, not an array, so no .heyAbdur
// now lets see prototypal inheritance
const user = {
  username: "Abdur",
  price: 199,
};
const student = {
  studies: true,
};

const studySupport = {
  isAvailable: true,
};

const TA_support = {
  fullTime: false,
  assignment: "JS assignment",
  __proto__: studySupport,
};

student.__proto__ = user;
// modern syntax
Object.setPrototypeOf(student, user); // teacher has access to all properties of user

// lets comeback to trulength of string

let anotherusername = "Abdur Rehman Khan  ";
String.prototype.trueLength = function () {
  console.log(`this is ${this}`);
  console.log(`True Length is ${this.trim().length}`);
};
anotherusername.trueLength();
"abdurrehmankhan".trueLength();
"umarabdullah".trueLength();