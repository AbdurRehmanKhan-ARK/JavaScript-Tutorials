/**
 * =============================================================================
 * 🚀 JAVASCRIPT EXECUTION CONTEXT & CALL STACK MASTERCLASS
 * =============================================================================
 *
 * 1. Global Execution Context (GEC) -> Always allocated & tied to 'this'
 *    (In browser: Windows Object, in Node.js: Empty Object {})
 * 2. Function Execution Context (FEC) -> Created dynamically on every function call.
 * 3. Eval Execution Context -> Created inside eval() functions (rarely used).
 *
 * JS Execution Phases:
 * Phase 1: Memory Creation Phase (Creation Phase)
 * Phase 2: Code Execution Phase
 */

// =============================================================================
// 🧠 STEP 1: UNDERSTANDING THE TWO-PHASE MECHANICS
// =============================================================================

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*
    Detailed Engine Breakdown:
    
    1. Global Execution Context Created -> Assigned to 'this'
    
    2. Phase 1: Memory Creation Phase
       - val1    = <uninitialized> (Lives in Temporal Dead Zone / TDZ)
       - val2    = <uninitialized> (Lives in TDZ) as both are let variables
       - addNum  = holds entire function definition literal
       - result1 = <uninitialized>
       - result2 = <uninitialized>
       *(Note: If these were 'var', they would be initialized as 'undefined')

    3. Phase 2: Code Execution Phase
       - Line 1: val1 gets assigned 10
       - Line 2: val2 gets assigned 5
       - Line 9: addNum() invoked -> Creates a New Sandbox!
                 [New Variable Environment (NVE) + Execution Thread]
                 
        🔬 INSIDE THE addNum FUNCTION SANDBOX (For result1):
        -------------------------------------------------------------
        |  Memory Phase (Local)     |  Execution Phase (Local)       |
        |  num1  = undefined        |  num1  = 10                    |
        |  num2  = undefined        |  num2  = 5                     |
        |  total = undefined        |  total = 15                    |
        -------------------------------------------------------------
        * The 'total' value (15) is returned straight to the Global Execution Context.
        * This local functional sandbox is IMMEDIATELY deleted from RAM.

       - result1 gets assigned 15
       - Line 10: addNum(10, 2) invoked -> Creates another brand new functional sandbox,
                  processes it, returns 12, and deletes itself again.
       - result2 gets assigned 12
*/

// =============================================================================
// 🧱 STEP 2: THE CALL STACK LOGIC (LIFO - Last In, First Out)
// =============================================================================

function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

// Execution Triggers
one();
two();
three();

/*
    Call Stack Simulation Visualizer:
    
    [Round 1: Triggered by one()]
    |             |   =>   |   three()   |   =>   |             |   =>   |             |   =>  |             |
    |   two()     |   =>   |   two()     |   =>   |   two()     |   =>   |             |   =>  |             |
    |   one()     |   =>   |   one()     |   =>   |   one()     |   =>   |   one()     |   =>  |             |
    | Global Context| =>   | Global Context| =>   | Global Context| =>   | Global Context| =>  | Global Context|
    (one() pushed)         (two() pushed)         (three() pops)         (two() pops)          (one() pops)
    
    [Round 2: Triggered by two()]
    |             |   =>   |   three()   |   =>   |             |   =>   |             |
    |   two()     |   =>   |   two()     |   =>   |   two()     |   =>   |             |
    | Global Context| =>   | Global Context| =>   | Global Context| =>   | Global Context|
    (two() pushed)         (three() pushed)       (three() pops)         (two() pops)

    [Round 3: Triggered by three()]
    |   three()   |   =>   |             |
    | Global Context| =>   | Global Context|
    (three() pushed)       (three() pops)
    
    Final State: Call Stack is now entirely clean and empty! Execution Complete.
*/
