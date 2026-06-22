// IIFE - Immediately Invoked Function Expressions

// 1. Named IIFE (Jis function ka apna naam ho)
(function connectDB() {
  console.log(`DB CONNECTED SUCCESSFULLY`);
})();

// ⚠️ IMPORTANT NOTE FOR INTERVIEW: IIFE ke end mein SEMICOLON (;) lagana zaroori hai!
// Agar semicolon nahi lagao gae, toh JS engine ko nahi pata chalega ke context kahan khatam hua hai,
// aur iske baad likha hua agla function error (TypeError: ... is not a function) de dega.

// 2. Unnamed / Arrow IIFE (Bina naam wala, arrow function ke sath)
(() => {
  console.log(`DB CONNECTED TWO`);
})(); // must put semicolons when using more than 1 IIFE

// 3. Passing Parameters/Arguments in IIFE
((username) => {
  console.log(`Welcome back, ${username}`);
})("Abdur");

// -----------------------------------------------------------------------------
// 🔥 INTERVIEW SUMMARY:
// Q: Why do we use IIFE?
// A: To prevent global scope variables from polluting our local block scope,
//    and to execute a functional block immediately upon script execution.
// -----------------------------------------------------------------------------
