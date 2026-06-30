// fundamentals of fetch
// fetch(url, options), is the modern replacement for XHR

// the global fetch() method starts the process of fetching a resource from network, returning a promise which is fulfilled once the response is available. The promise resolves the Response object representing the response to your request

// NOTE: error404 is neither found in resolve nor reject, its always returned as a response because its not an error, an error would be in such a case that the browser isn't able to do request

// response = fetch('something.com')
// then there are two functions that occur during the process

// one is data having onFulfilled[] (for resolve) and onRejection[] (for reject), you cant push or pop into these arrays (in-accessible) ,

// second one either handles web browser based API or node based API, there goes a network request which either response that goes into onFulfilled[](resolve) otherwise if request stucks or no response generated then it goes into onRejection[](reject)

// NOTE: error404 IS A RESPONSE NOT AN ERROR, so thats why it also goes into onFulfilled[](resolve)

//    Basic fetch
/*
fetch("https://api.github.com/users/AbdurRehmanKhan-ARK")
  .then((response) => {
    console.log(response); // Response object — status, headers, etc
    console.log(response.status); // 200
    console.log(response.ok); // true if status 200-299
    return response.json(); // parse body — also returns a Promise
  })
  .then((data) => {
    console.log(data); // actual JS object
  })
  .catch((error) => {
    console.log(error); // only network failure — NOT 404
  });
*/
//    404 is NOT an error — prove it
fetch("https://api.github.com/users/thisuserdoesnotexist999xyz")
  .then((response) => {
    console.log(response.status); // 404
    console.log(response.ok); // false — but still in .then(), not .catch()
    return response.json();
  })
  .then((data) => {
    console.log(data); // { message: "Not Found" }, if it would be an error then it would go to .catch()
  })
  .catch((error) => {
    console.log(error); // never runs for 404
  });
// fetch() reject() sirf network failure pe karta hai
// HTTP status codes (404, 500, etc) hamesha resolve() karte hain
// isliye manually response.ok check karna padta hai

//    async/await style
async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`); // manually throw for 404 etc
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUser("AbdurRehmanKhan-ARK");
getUser("thisuserdoesnotexist999xyz"); // HTTP Error: 404
