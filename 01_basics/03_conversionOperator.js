let score = 78
console.log(typeof (score)) // 78

let stringScore = "22"
console.log(typeof (stringScore)) // string

let booleanScore = true
console.log(typeof (booleanScore)) // boolean

let valueInNumber = Number(score) // convert string to number
let newScore = "33dsa"
let valueInNumber2 = Number(newScore) // NaN => Not a Number
console.log(valueInNumber2)

let differentScore = null
console.log(typeof (differentScore)) // object
let valInNumber3 = Number(differentScore) // 0
console.log(valInNumber3)


/*
Concluding that conversion operators in javascript are used to convert one data type to another data type.
Number() => convert to number
String() => convert to string
Boolean() => convert to boolean
but keep in mind that if the value is not convertible to the desired data type, it will return NaN for numbers, "undefined" for strings, and false for booleans. moreover, null is considered as 0 when converted to a number, and undefined is considered as NaN when converted to a number. 

similiarly, null is considered as "null" when converted to a string, and undefined is considered as "undefined" when converted to a string. for booleans, any non-empty string or non-zero number will be considered as true, while an empty string, 0, null, undefined, and NaN will be considered as false.

given these rules, it's important to be cautious when using conversion operators, as they can lead to unexpected results if the input value is not in the expected format. always check the data type of the value before performing conversions to avoid potential bugs in your code.
*/