// its all after ES6
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `encrypted password: ${this.password}1b2ac3`;
//     }

//     capUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// } // WHENEVER new keyword is used, a new object is created via constructor

// const chai = new User("chai", "code@example.com", "admin123");
// console.log(chai.encryptPassword());
// console.log(chai.capUsername());

// BEHIND THE SCENES OF THIS SYNTACTIC SUGAR

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `encrypted password: ${this.password}1b2ac3`;
};

User.prototype.capUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const chai = new User("chai", "code@example.com", "admin123");
console.log(chai.encryptPassword());
console.log(chai.capUsername());

