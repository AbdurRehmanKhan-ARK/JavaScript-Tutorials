const user = {
  username: "Abdur",
  price: 199,
  welcomeMessage: function () {
    console.log(`Welcome to Website ${this.username}`); // this is used to reference current object
    console.log(this); // prints the current object which is user, after this the terminal would print 'undefined' that is that this particular func didn't return anything
  },
};

console.log(user.welcomeMessage());
// lets call this in global context
// Node.js mein:
 // {}  — module.exports

console.log(this); // in broser =>Window {...}


// okay what if we want to create more user instances? then we need to use constructor function instead of copy pasting the const user code again n again, instead what we do is

function User(username, price) {
  this.username = username;
  this.price = price;
  return this; // returning the current object with all node properties   
}

// always write new keyword while creating instances otherwise the latest instance would overwrite the previous one
const userr1 = User("Abdur", 199);
console.log(userr1.username);
const userr2 = User("Umar", 499);
console.log(userr1.username); 

// although im printing user1, but it will print UMAR... PESA BARBAAAAD.. thats why always use 'new' keyword

const user1 = new User("Abdur", 199); // this is called constructor function
console.log(user1); // Output: { username: 'Abdur', price: 199 }, 
// remember that constructor functions are used to create (initialize) new object instances of a class they don't return anything.

const user2 = new User("Umar", 499);
console.log(user1.username); // Output: 'Abdur', ab nahi aya umar, because of using new keyword

// what happens behind new keyword
// When you write: newUser("abd", 199)
// The JS engine does 4 steps automatically:

// 1. A new empty object is created => {}
// 2. 'this' points to the object we created.
// 3. The function code runs => this.username = "abd" is set
// 4. 'this' returns automatically (no explicit return required)

// So writing 'this' back is optional with 'new'
// But without 'new' - the function is called normally, 'this' = global object (or undefined in strict mode)
// So properties are not set on a new object, rather the global object is corrupted

// use "use strict"; at the top of your .js file to automatically enforce strict mode in your code and these errors will be thrown as early as possible