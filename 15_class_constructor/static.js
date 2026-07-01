//Key Characteristics of Static keyword
// Class Ownership: Static items belong to the constructor function, not the created instances.

// No Instance Access: You cannot call a static method or access a static property on a class instance.

// The this Behavior: Inside a static method, this refers to the class itself, not an instance of the class.

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User name is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const user1 = new User("Abdur");
user1.logMe();
// console.log(user1.createId()); // => user1.createId is not a function (static method cannot be called on instance)

// nor it is accessible by a derived(child) class's instances as well

class Teacher extends User {
  constructor(username, email) {
    (super(username), (this.email = email));
  }
}

const ark = new Teacher("Abdur Rehman", "abdurrehmankhano@example.com");
ark.logMe();
console.log(ark.createId()); // => ark.createId is not a function
console.log(Teacher.createId()); // "123" this works because it is called via CLASS not INSTANCE