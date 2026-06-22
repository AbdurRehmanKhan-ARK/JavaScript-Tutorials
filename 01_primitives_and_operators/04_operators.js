let value = 16
negValue = -value
console.log(negValue) // -16

console.log(5 + 3) // 8
console.log(5 - 3) // 2
console.log(5 * 3) // 15
console.log(5 / 3) // 1.6666666666666667
console.log(5 % 3) // 2
console.log(5 ** 3) // 125 (raised to the power of)

let a = 5
a += 3 // a = a + 3
console.log(a) // 8

let str1 = "abdur"
let str2 = " rehman"
let str3 = str1 + str2
console.log(str3) // "abdur rehman"

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// such type of code is too immature to write at production level, but it is important to understand how it works.

// increment/decrement operator
// prefix
// postfix  
// difference between prefix and postfix is that in prefix, the variable is incremented before it is used, while in postfix, the variable is incremented after it is used.

let x = 5
console.log(x++) // 5
console.log(x) // 6 
let y = 4
console.log(++y) // 5
console.log(y) // 5