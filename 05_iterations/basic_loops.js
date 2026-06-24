//  1. STANDARD FOR LOOP & NESTED LOOPS

for (let i = 0; i < 10; i++) {
  const element = i;
  // Explanation: 'const' works inside loops because each single iteration creates
  // a completely new block scope {}. It is not being re-assigned; it's a new variable every time.
  // console.log(element);
}

// Nested For Loop (Multiplication Table Example)
console.log("Multiplication Table till 10");
for (let i = 0; i <= 10; i++) {
  const element = i;
  for (let j = 0; j <= 10; j++) {
    const subElement = j;
    // console.log(`${element} * ${subElement} = ${element * subElement}`);
  }
  // console.log("\n\n\n"); // Separates parent loop iterations visually
}

// Iterating over an Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  // Optimization Note: In huge datasets, evaluating 'arr.length' on every iteration
  // causes a slight overhead. Caching it first (e.g., let len = arr.length) is a pro-pattern.
  // const element = arr[i] * arr[i];
  // console.log(element);
}

// 2. JUMP STATEMENTS: BREAK AND CONTINUE

// Break Statement
for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 5) {
    break;
    // Explanation: Instantly terminates the entire loop execution.
    // Control flows directly to the first line outside the loop block.
  }
  // console.log(element); // Prints 0 to 4
}

// Continue Statement
for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 5) {
    continue;
    // Explanation: Skips the remaining code inside the current iteration only.
    // It immediately jumps back to the update expression (i++) for the next iteration.
  }
  // console.log(element); // Prints 0 to 9, except 5
}

// 3. WHILE AND DO-WHILE LOOP

// Standard While Loop (Condition-first evaluation)
let i = 0;
while (i < 10) {
  const element = i;
  // console.log(element);
  i++; // Crucial: Missing the increment triggers a fatal infinite loop memory crash.
}

// Array Mutation using While Loop
let myArr = ["abdur", "rehman", "osama", "ateeb", "talha"];
while (myArr.length > 2) {
  const element = myArr.pop();
  // Explanation: .pop() alters array length dynamically in-place.
  // The loop keeps running and popping elements until the condition (length > 2) breaks.
  // console.log(element);
}

// Do-While Loop (Body-first evaluation)
let j = 0;
do {
  const element = j;
  // console.log(element);
  j++;
} while (j < 10);

// Concrete example of Do-While executing at least once despite a false condition
let score = 100;
do {
  const element = score;
  console.log(element); // Prints 100
  score++;
} while (score < 100);
// Explanation: The block executes blindly FIRST, then the condition checks at the end.
// Since 101 < 100 evaluates to false, the loop terminates immediately after one run.
