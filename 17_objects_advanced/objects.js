// interviewer: i want this value to be 3 or 4 , is it possible? justify ur answer
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // From the module Math , give me the property descriptor of PI

// console.log(descriptor)
// output =>
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// lets make our own object and lets see if we can flag its property values

const chai = {
  name: "Ginger Chai",
  price: 100,
  isAvailable: true,
  isHealthy: true,
  isCold: false,
};

const descriptor1 = Object.getOwnPropertyDescriptor(chai, "name");
console.log(descriptor1);
// output =>
/*
{
  value: "Ginger Chai",
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// output =>
/*
{
  value: "Ginger Chai",
  writable: false,
  enumerable: false, (you can't iterate over it, the name property)
  configurable: true
}
*/

for (let key in chai) {
  console.log(`${key} : ${chai[key]}`); // name is not printed because enumerable is false
}

// output =>
/*
[
  'price',
  'isAvailable',
  'isHealthy',
  'isCold'
]
*/

const advancedChai = {
  name: "Karak Chai",
  price: 80,
  prepareChai: function () {
    console.log("Boiling milk and tea leaves...");
  },
};

// name should not be iterated
Object.defineProperty(advancedChai, "name", {
  enumerable: false,
});

// ITERATE but exclude the function's body coz its not a gud practice
for (let [key, value] of Object.entries(advancedChai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// what about changing PI to 3 or 4?
/*
No, it is not possible to change the value of Math.PI because its property descriptor flags, specifically writable and configurable—are hard-locked to false by the JavaScript engine code. These internal constraints prevent both reassignment and re-configuration of the property at the global engine level."
*/
