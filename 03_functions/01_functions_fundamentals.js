function sayMyName() {
  // this is a function definition
  console.log("A");
  console.log("B");
  console.log("D");
  console.log("U");
  console.log("R");
}

// this is function reference
// sayMyName // it won't execute
// and this is reference with its execution
sayMyName();

// function addTwoNums(num1, num2){ // num1 and num2 are function parameters
//     console.log(num1 + num2) // num1 + num2
// }

// console.log("Result: ", result ) // result will show undefined because console log isn't returned

function addTwoNums(num1, num2) {
  // num1 and num2 are function parameters
  return num1 + num2; // num1 + num2 which is now returned (not console logged)
}

const result = addTwoNums(10, 20); // 10 and 20 are arguments, lets try store it in a variable

console.log("Result: ", result); // correct result

function loginUserMessage(username) {
  if (username === undefined) {
    // or !username
    console.log("Please enter a username");
    return;
  }
  return `Login Successful for ${username}`;
}

console.log(loginUserMessage("Abdur Rehman"));

// what if we pass empty arguments
console.log(loginUserMessage()); // returns undefined, but since we added if statement it will show error message at console

// also we can pass default arguments
function loginUserMessageDef(username = "Abdur Rehman") {
  // since here it is default argument, it will return Abdur Rehman by default so no need to check undefined
  return `Login Successful for ${username}`;
}

console.log(loginUserMessageDef()); // it will still return Abdur Rehman becuase we added default argument

console.log(loginUserMessageDef("Talha")); // will overwrite the default argument

// lets see use of rest operator
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 300, 100));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 300, 100)); // here val1 and val2 will take 200 and 400 and rest of values will be assigned to num1 array (300, 100)

const user= {
    username: "Abdur",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`)
}

handleObject(user) // OR
handleObject({
    username: "Abdur",
    price: 299
})

const newArr = [1,2,3,4,5,6]
function returnSecondValue(getArr){
    return getArr[1]
}


returnSecondValue(newArr)
