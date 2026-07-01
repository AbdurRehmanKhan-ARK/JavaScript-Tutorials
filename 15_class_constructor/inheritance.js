class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User name is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, subject) {
    super(username); // does a lot of work for us, calls the constructor of the parent class and passes the arguments using 'this' keyword by itself
    this.subject = subject;
  }

  addCourse() {
    console.log(`New course added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "JavaScript");
console.log(chai);
chai.logMe();
chai.addCourse();

const User = new user("Abdur");
User.logMe();
console.log(chai instanceof user); // chai -> Teacher -> user -< true
console.log(chai instanceof Teacher); // chai -> Teacher -< true
console.log(User instanceof user); // User -> user -< true

// Method Overriding
// If you write the same method in the child class as in the parent.
// Then the child version will run (the parent is overridden)

class Teacher1 extends user {
  constructor(username, subject) {
    super(username);
    this.subject = subject;
  }

  logMe() {
    // parent ka logMe override kar diya
    console.log(`Teacher: ${this.username} teaches ${this.subject}`);
  }

  addCourse() {
    console.log(`New course added by ${this.username}`);
  }
}

const t = new Teacher1("Hitesh", "JS");
t.logMe(); // "Teacher: Hatish teaches JS" — the child version runs, not the parent

// If the parent also runs:
class Teacher2 extends user {
  logMe() {
    super.logMe(); // First run parent's logMe
    console.log(`Subject: ${this.subject}`);
  }
}

