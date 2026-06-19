// NUMBERS

const balance = new Number(100) // we explicitly create a Number object using the Number constructor, which is not recommended, because it creates an object instead of a primitive value, and it can lead to unexpected behavior when we try to use it in mathematical operations or comparisons.
console.log(balance) // [Number: 100]

console.log(typeof balance) // "object" because it is a Number object, not a primitive  
// value.

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // this method returns a string representation of the number with a specified number of digits after the decimal point, in this case we are specifying 2 digits after the decimal point, so it will return "100.00"

const otherNum = 123.8955
console.log(otherNum.toPrecision(4)) // this method returns a string representation of the number with a specified number of significant digits, in this case we are specifying 4 significant digits, so it will return "123.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // this method returns a string representation of the number with a language-sensitive representation, in this case it will return "1,000,000" in English locale, but it may return "1.000.000" in some other locales.


// MATHEMATICS

console.log(Math.PI)
console.log(Math.abs(-4 ))
console.log(Math.round(78.6));
console.log(Math.ceil(78.1));
console.log(Math.floor(78.6));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.random()) // this method returns a random number between 0 (inclusive) and 1 (exclusive), so it can return any number from 0 to 0.9999999999999999, but it will never return 1.
console.log((Math.random() * 10) + 1) // this will return a random number between 1 (inclusive) and 11 (exclusive), so it can return any number from 1 to 10.999999999999999, but it will never return 11.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // this will return a random integer between min (inclusive) and max (inclusive), so it can return any integer from 10 to 20, including both 10 and 20.