// okay so let's cover comparison between data types, we have already seen that we can compare numbers and strings using the comparison operators, but what about other data types?

// we can compare booleans, null, undefined, objects, arrays, functions, etc. using the comparison operators, but the result may not be what we expect.

console.log(true == 1) // true
console.log(false == 0) // true
console.log(null == undefined) // true
console.log(null > 0) // false
console.log(undefined > 0) // false
console.log(null < 0) // false
console.log(undefined < 0) // false
console.log(null == 0) // false
console.log(undefined == 0) // false
console.log(null >= 0) // true
console.log(undefined >= 0) // false
console.log(null <= 0) // true
console.log(undefined <= 0) // false

// the reason for this is that when we compare different data types, JavaScript tries to convert them to a common type before comparing them, and this can lead to unexpected results.
// plus the reason is that equality check == and comparison > < >= <= operators work differently, the equality check == operator converts null to a number treating it as 0 (type coercion), while the comparison operators > < >= <= do not perform type coercion and compare the values as they are.

// while undefined is always treated as NaN so its always false when compared to any number, and null is treated as 0 when compared to numbers, but it is not equal to 0 when using the equality check == operator.

// so it's important to be aware of these quirks when comparing different data types in JavaScript, and it's generally recommended to use the strict equality check === operator to avoid unexpected results due to type coercion.

// === is the strict equality check operator, it checks for both value and type, so it does not perform type coercion and returns false if the types are different.
console.log(true === 1) // false
console.log(false === 0) // false
console.log(null === undefined) // false
console.log(null === 0) // false
console.log(undefined === 0) // false