const user = {
    username: "Abdur",
    price: 899,

    welcomeMessage: function() {
        console.log(`Welcome to Website ${this.username}`) // this is used to reference current object
        console.log(this) // prints the current object which is user
    }
}

user.welcomeMessage()
user.username = "rafay"
user.welcomeMessage() // context changed to new object with new username

console.log(this) // node mein 'global' object print karega, kyunki ise globally call kiya gaya hai.

// in nodeJS environment the global object is empty {}
// while in browser global object is window object thats why inspect console catches all window DOM events (click, form submit etc)

function tea(){
    tea.username = "rafay"
    console.log(this.username) // undefined kyunki global scope mein username nahi hai 
}

chai()