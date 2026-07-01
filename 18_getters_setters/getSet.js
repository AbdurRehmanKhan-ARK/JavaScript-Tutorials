// ADVANCED JAVASCRIPT: GETTERS & SETTERS (Property Accessors)

// 1. THE MODERN ES6 CLASS APPROACH (Standard Production Pattern)
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password; // Triggers the setter implicitly
  }

  // GETTER: Executes when the property is read/accessed.
  // Must return a value. Takes zero parameters.
  get password() {
    return `${this._password.toUpperCase()}@SECURE_MASK`;
  }
  // The underscores (_) represent an internal backing property convention.
  // Using the exact property name (this.password) inside accessors triggers an infinite loop,
  // throwing "RangeError: Maximum call stack size exceeded".

  // SETTER: Executes when a value is written/assigned to the property.
  // Does not return a value. Takes exactly one parameter.
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toLowerCase();
  }

  set email(value) {
    this._email = value;
  }
}

const chai = new User("code@example.com", "admin123");
console.log(chai.password); // Output: ADMIN123@SECURE_MASK
console.log(chai.email); // Output: code@example.com

// 2. OLD METHOD USING CONSTRUCTOR FUNCTIONS (Behind the Scenes Object Framework)
function OldUser(username, email) {
  this._username = username;
  this._email = email;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toLowerCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "username", {
    get: function () {
      return this._username.toUpperCase();
    },
    set: function (value) {
      this._username = value;
    },
  });
}

const tea = new OldUser("tea", "code@example.com");
console.log(tea.username); // Output: TEA
console.log(tea.email); // Output: code@example.com

// 3. OBJECT LITERAL APPROACH (Direct Prototypal Accessors)
const Account = {
  _tier: "standard",

  get tier() {
    return this._tier.toUpperCase();
  },

  set tier(value) {
    this._tier = value;
  },
};

const userAccount = Object.create(Account);
console.log(userAccount.tier); // Output: STANDARD
userAccount.tier = "premium";
console.log(userAccount.tier); // Output: PREMIUM
