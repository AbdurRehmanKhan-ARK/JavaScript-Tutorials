// Introduction to Application Programming Interfaces (APIs)

//   What is an API
// A set of rules and protocols that define how different software components communicate.
// Think of it as a waiter in a restaurant: (non-technical example)
//   - You (client) place an order
//   - Waiter (API) takes it to the kitchen (server)
//   - Kitchen prepares it and waiter brings it back
// You never go to the kitchen directly — the API is the middleman.

//   Types of APIs
// Web APIs     — communicate over HTTP (most common, what we use in JS)
// Browser APIs — built into the browser: DOM, Fetch, localStorage, Geolocation
// Third-party  — GitHub, Twitter, OpenWeather, Google Maps, Stripe

// REST API (most common type of Web API)
// REST = Representational State Transfer
// Rules:
//   1. Client-Server   — frontend and backend are separate
//   2. Stateless       — every request is independent, server remembers nothing
//   3. Uses HTTP methods to perform operations
//-------------------------------------------------------------
//     methods    purposes          examples
//_____________________________________________________________
//      GET    — read data       (fetch a user's profile)
//      POST   — create data     (submit a form, create a post)
//      PUT    — update data     (edit entire resource)
//      PATCH  — partial update  (change just one field)
//      DELETE — delete data     (remove a record)

//   What is JSON
// JavaScript Object Notation — the language APIs speak in
// Data is sent and received as JSON strings

// Example JSON response from GitHub API:
// {
//   "login": "AbdurRehmanKhan-ARK",
//   "public_repos": 12,
//   "followers": 1,
//   "location": "Karachi, Pakistan"
// }

// Looks like a JS object but it's a string — we parse it with JSON.parse()
// And convert JS object to JSON string with JSON.stringify()
// use json formatter website to see the clear structure of an API fetched 

//   HTTP Status Codes
// Every API response comes with a status code:
//   200  — OK, success
//   201  — Created (POST successful)
//   400  — Bad Request (you sent wrong data)
//   401  — Unauthorized (login required)
//   403  — Forbidden (you don't have permission)
//   404  — Not Found (wrong endpoint)
//   500  — Internal Server Error (server side problem)

//   GitHub API — Real Example
// Base URL: https://api.github.com
// Get user info:        GET https://api.github.com/users/AbdurRehmanKhan-ARK
// Get user repos:       GET https://api.github.com/users/AbdurRehmanKhan-ARK/repos
// Get specific repo:    GET https://api.github.com/repos/AbdurRehmanKhan-ARK/SocioNet-Plus-Plus
// Get repo commits:     GET https://api.github.com/repos/AbdurRehmanKhan-ARK/SocioNet-Plus-Plus/commits

// All of these are just URLs — paste them in browser and see raw JSON response
// That's what fetch() will receive and we work with in JS

//   How we use APIs in JS
// Step 1 — make a request using fetch()
// Step 2 — wait for the response (async/await or .then())
// Step 3 — parse JSON with response.json()
// Step 4 — use the data in the DOM

// fetch("https://api.github.com/users/AbdurRehmanKhan-ARK")
//   .then(response => response.json())
//   .then(data => console.log(data.public_repos))

// This will be covered in detail in 11_fetch/
