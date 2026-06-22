const name = "Abdur Rehman";
const repoCount = 10

console.log(name + " has " + repoCount + " repositories") // Abdur Rehman has 10 repositories 

// this is an old fashioned way of concatenating strings, but it is still valid and works fine, but it can be a bit cumbersome to read and write, especially when we have multiple variables to concatenate.

// template literals are a new way of concatenating strings, introduced in ES6, and they are much easier to read and write, especially when we have multiple variables to concatenate, also called string interpolation

console.log(`${name} has ${repoCount} repositories on Github`) // Abdur Rehman has 10 repositories

const repoName = new String("JavaScript-Basics") // this is a string object, which is a wrapper around the primitive string value, and it has properties and methods, just like other objects.
console.log(repoName) // [String: 'JavaScript-Basics']
console.log(typeof repoName) // object
console.log(repoName.length) // 17
console.log(repoName.toUpperCase()) // JAVASCRIPT-BASICS
console.log(repoName.toLowerCase()) // javascript-basics
console.log(repoName.charAt(0)) // J
console.log(repoName.charAt(1)) // a
console.log(repoName.charAt(2)) // v
console.log(repoName.indexOf('B')) // 11

const newString = repoName.substring(0, 10) // this method returns a new string that is a substring of the original string, starting from the index specified by the first argument and ending at the index specified by the second argument (not inclusive).
console.log(newString) // JavaScript

const anotherString = repoName.slice(0, 10) // this method is similar to substring, but it can also accept negative indices, which count from the end of the string.
console.log(anotherString) // JavaScript
const lastPart = repoName.slice(-8) // this will return the last 8 characters of the string, which is "Basics"
console.log(lastPart) // Basics

const newSstring = "     abdur rehman     "
console.log(newSstring) // "     abdur rehman     "  
console.log(newSstring.trim()) // "abdur rehman" this method removes the whitespace from both ends of the string, but it does not remove the whitespace from the middle of the string.

const url = "https://www.github.com/AbdurRehmanKhan-ARK"
console.log(url.replace("https", "http")) // this method returns a new string with the specified value replaced by another value, in this case we are replacing "https" with "http", but it does not change the original string, because strings are immutable in JavaScript.
console.log(url) // https://www.github.com/AbdurRehmanKhan-ARK

console.log(url.includes("github")) // true, this method returns true if the string contains the specified value, and false otherwise, it is case sensitive, so it will return false if we search for "Github" instead of "github".

console.log(url.split("/")) // this method splits the string into an array of substrings, using the specified separator, in this case we are splitting the string by "/", so it will return an array of substrings, which are "https:", "", "www.github.com", "AbdurRehmanKhan-ARK"

