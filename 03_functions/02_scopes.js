let a = 100 // this 'a' is totally independent of the if(true) block
const b = 20
var c = 300

console.log(a)
console.log(b)
console.log(c)

{} // this is scope in programming language called also called block scope

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER a: ", a) // 10 not 100 as it is block scoped
}

console.log(a) // 100 
console.log(b)
console.log(c)
// whats the issue? the isse is that let and const are block scoped, var is global scoped by default, 30 will be printed but 10 and 20 will not be printed as they are block scoped in if(true) block only plus a confusion will be created that why 300 wasn't printed as it is global scoped because var 30 can be accessed outside the if(true) block

console.log(a) // a has 100 as it was defined and initialized outside the if(true) block , both inside block a = 10 and outside if block a = 100 are safe to access within and outside the if(true) block respectively

// interview question: is code editor scope and console scope at inspect element the same?
// answer:
/* 
No, because both environments actually support block, function, and global scopes.The real differences are execution context and debugging behavior.Code in an editor usually runs inside protected modules, while the console defaults to the global window.However, pausing at a breakpoint forces the console to adopt that exact local code scope.
*/