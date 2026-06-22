// outer func is always executed first
function one() {
  const username = "talha";
  function two() {
    const website = "youtube";
    console.log(username); // it will print talha because inner func can access outer func variables
  }
  // console.log(website) // here outer func -> one, can't access inner func variable -> website due to scope blocked
  // two() // hence this two() will not be executed as well, as it is inside the one() func, it returns error on website accessing
}

one(); // this one() will be executed first

// this was classic example of nested functions, the hierarchy is simple as one > two, the inner function can access the outer function variables but the outer function cannot access the inner function variables - this is called Lexical Scoping in JavaScript\

// lets see code example of Closure now
function outerFunction() {
  let iceCreamCount = 10; // Outer variable

  function innerFunction() {
    iceCreamCount--; // Outer variable ko modify/access kar raha hai
    console.log(`Bachi hui ice cream: ${iceCreamCount}`);
  }

  return innerFunction; // Hum function ko CALL nahi kar rahe, sirf RETURN kar rahe hain
}

// outerFunction ko chalaya aur uska result (jo ke innerFunction hai) ek variable mein rakh liya
const getIceCream = outerFunction();

// Yahan par outerFunction poori tarah execute ho kar khatam ho chuka hai!
// Ideally, 'iceCreamCount' variable ko memory se delete ho jana chahiye tha... Lekin:

getIceCream(); // Output: Bachi hui ice cream: 9
getIceCream(); // Output: Bachi hui ice cream: 8

// question : Agar main ek aur naya variable banata hoon: const freshShop = outerFunction();
// Aur phir freshShop() ko call karta hoon, toh btao output 7 aana chahiye ya 9?
const freshShop = outerFunction();
freshShop(); // Output: Bachi hui ice cream: 9
// answer: 9 aana chahiye, because
/*

1. Step-by-Step Calculation
const getIceCream = outerFunction(); Memory mein Box A bana. iceCreamCount = 10.
getIceCream(); (First Call) Box A ka count kam hua: 10 - 1 = 9. Output: 9.
getIceCream(); (Second Call) Box A ka count mazeed kam hua: 9 - 1 = 8. Output: 8.

2. Fresh Call Ka Outputconst freshShop = outerFunction();
   Memory mein ek bilkul naya Box B bana.Is naye Box B mein iceCreamCount phir se 10 se initialize hua.freshShop(); (First Call)
   Box B ka apna count kam hua: 10 - 1 = 9.


   If you keep creating new boxes (const freshShop = outerFunction()) and never clean them up, they pile up in RAM. That is a closure memory leak.

To fix it, break the chain:
getIceCream = null; // Arrow broken! The GC sweeps Box A away instantly.
*/

// // ---------------- INTERESTING ----------------
// function addOne(x) {
//   return x + 1
// }

// addOne(5) // this is basic function

// const addTwo = function(x){
//   return x + 2
// }

// addTwo(5) // this is sometimes called expression function

/*

Hoisting, JavaScript engine ka woh compile-time mechanism hai jisme saare variable aur function declarations ko execution se pehle memory phase mein top par allocate kar diya jata hai—lekin standard functions ke bar-aks, variables ki sirf declaration lift hoti hai, unki initialization ya value nahi. and let aur const k case me woh ek Temporal Dead Zone (TDZ) mein chale jate hain. Engine ko abhi tak nahi pata ke iske andar koi function baithne wala hai.

*/

console.log(addOne(5)); // this works fine

function addOne(x) {
  return x + 1;
}

// ❌ ReferenceError: Cannot access 'addTwo' before initialization
addTwo(5); // but this will give error because the function addTwo is stored in a variable
const addTwo = function (x) {
  return x + 2;
};
