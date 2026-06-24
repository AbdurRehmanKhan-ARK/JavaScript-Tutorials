/*
  CONTROL FLOW IN JAVASCRIPT (if-else, Ternary, & Switch Pipeline)
*/

//  1. CONDITIONAL OPERATORS & SCOPE MECHANICS

const isUserLoggedIn = true;

// Comparison Operators:
// ==  -> Abstract Equality (Coerces types: 2 == "2" is true)
// === -> Strict Equality (No type coercion: 2 === "2" is false) -> ALWAYS USE THIS
// !=  -> Loose Not Equal
// !== -> Strict Not Equal (2 !== "2" evaluates to true)

const temperature = 31;
if (temperature > 40) {
  console.log("It's a hot day");
} else {
  console.log("It's not a hot day");
}

let gameScore = 200;
if (gameScore > 100) {
  const power = "fly"; // Block-scoped to 'if' {}
  console.log(`User power: ${power}`);
} else {
  const power = "run"; // Block-scoped to 'else' {}
  console.log(`User power: ${power}`);
}
// console.log(power); //  Throws ReferenceError: power is not defined (Lexical Scope)

// 2. TERNARY & LOGICAL OPERATORS

// Ternary Operator (Syntax: condition ? expression_if_true : expression_if_false)
// Super important for conditional rendering in React!
console.log(isUserLoggedIn ? "User is logged in" : "User is not logged in");

// Logical Operators: && (AND), || (OR), ! (NOT)
gameScore = 52;
if (gameScore > 50 && gameScore <= 54) {
  console.log("GPA: 1.33");
}

const loggedInFromEmail = true;
const loggedInFromUsername = false;
if (loggedInFromEmail || loggedInFromUsername) {
  console.log("User entry authorized");
}

//  3. THE SWITCH STATEMENT

const month = "august";
switch (month) {
  case "january":
    console.log("January");
    break;
  case "february":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  case "april":
    console.log("April");
    break;
  case "may":
    console.log("May");
    break;
  case "june":
    console.log("June");
    break;
  case "july":
    console.log("July");
    break;
  case "august":
    console.log("August");
    break;
  case "september":
    console.log("September");
    break;
  case "october":
    console.log("October");
    break;
  case "november":
    console.log("November");
    break;
  case "december":
    console.log("December");
    break;
  default:
    console.log("Not a month");
    break;
}

/* 
 Using Comparison Operators inside Switch!
*/
const studentMarks = 85;
switch (true) {
  case studentMarks >= 90:
    console.log("Grade A");
    break;
  case studentMarks >= 80 && studentMarks < 90:
    console.log("Grade B"); //  This will execute!
    break;
  default:
    console.log("Grade F");
}
