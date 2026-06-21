// lets learn regarding singletons in JavaScript
// const JSuser = new Object() // this is a singleton becuase we are creating a new object

JSuser = {} // this is not a singleton because we are creating an empty object
JSuser.id = 123
JSuser.name = "Abdur Rehman Khan"
JSuser.email = "abdurrehmankhano@example.com"
JSuser.isLoggedIn = true,
JSuser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"]   

console.log(JSuser)

// lets see nested objects, an important concept regarding interviews

const regularUser = {
    email: "abdurrehmankhano@example.com",
    fullName: {
        userFullName: {
            firstName: "Abdur",
            lastName: "Rehman"
        }
    }
}

console.log(regularUser.fullName.userFullName.lastName)

// lets see how to flatten multiple objects using spread operator

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// lets see how to manipulate array of objects like how users are stored in a database

const users = [
    {
        id: 1,
        email: "abdurrehmankhano@example.com",
        name: "Abdur Rehman"
    },
    {
        id: 2,
        email: "abdurrafaykhan@example.com",
        name: "Abdur Rafay"
    },
    {
        id: 3,
        email: "hanzalaahmed@example.com",
        name: "Hanzala Ahmed"
    },
]

console.log(users[1].email)
console.log(users)

// lets see how to extract and keys or values only
console.log(Object.keys(users))
console.log(Object.values(users))

// lets see how to do it without built-in properties to extract keys only for nested objects ( important interview wise question )

function extractKeys(obj) {
    for (let key in obj) 
    {
        console.log(key);
        if(typeof obj[key] === "object") {
            extractKeys(obj[key])
        }
    }
}

// lets create an immense nested object
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    }
}
console.log(extractKeys(obj))

console.log(JSuser.hasOwnProperty("email"))
console.log(JSuser.hasOwnProperty("name")) // Basically this will return true or false

// lets see how to get the length of an object
console.log(Object.keys(JSuser).length)