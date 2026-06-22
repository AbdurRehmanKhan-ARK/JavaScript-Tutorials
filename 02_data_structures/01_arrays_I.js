// ARRAYS
const myArr = [1,2,3,4,6,7,8,5]
console.log(myArr[1])
console.log(myArr[2]) // this is zero based indexing

const names = ['abdur rehman','saahil','osama','ateeb','talha'] 
console.log(names)
// lets come to methods in arrays

myArr.push(9) // this will add an element to the end of the array
console.log(myArr)
myArr.pop() // this will remove the last element from the array
console.log(myArr)

myArr.unshift(0) // this will add an element to the beginning of the array
console.log(myArr)
myArr.shift() // this will remove the first element from the array
console.log(myArr) 


console.log(myArr.includes(9)) // this will return true if the element is present in the array, and false otherwise
console.log(myArr.indexOf(9)) // this will return the index of the first occurrence of the element

// SLICE AND SPLICE
/*
The primary difference is that slice() does not modify the original array and excludes the ending index, while splice() mutates the original array including the ending index. 

Think of slice() as taking a picture of a section of your data, and splice() as physically cutting out or inserting pieces into the actual data
*/

const myArr2 = [1,2,3,4,5]
console.log(myArr2)
console.log(myArr2.slice(1,3)) // this will return a new array that is a slice of the original array, from the specified start index to the specified end index (not inclusive)
console.log(myArr2.splice(1,3)) // this will remove the specified number of elements from the original array, starting from the specified start index
console.log(myArr2)