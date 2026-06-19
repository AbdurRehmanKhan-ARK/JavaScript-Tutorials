// // DATES

let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time in string format
console.log(myDate.toDateString()); // current date in string format
console.log(myDate.toTimeString()); // current time in string format
console.log(myDate.toISOString()); // current date and time in ISO format
console.log(myDate.toLocaleString()); // current date and time in locale format
console.log(myDate.getFullYear()); // current year
console.log(myDate.getMonth() + 1); // + 1 because js returns month b/w 0-11
console.log(myDate.getDate()); // current day of the month
console.log(myDate.getDay()); // current day of the week (0-6)

// console.log(typeof myDate) // "object" because it is a Date object, not a primitive value.

let myCreatedDate = new Date(2004, 7, 16);
console.log(myCreatedDate.toDateString()); // "Mon Aug 16 2004" because the month is 0-indexed, so 7 represents August, and the day is 16, and the year is 2004.

let createdDate = new Date("01-14-2024"); // this is a string representation of a date, and it is in the format of "MM-DD-YYYY", so it will be parsed as January 14, 2024, but it is not recommended to use this format, because it can lead to unexpected results in different browsers or environments, because some browsers may parse it as "DD-MM-YYYY" instead of "MM-DD-YYYY", so it is better to use the ISO format "YYYY-MM-DD" or the constructor with separate arguments for year, month, and day.

console.log(createdDate.getTime());
let myTimeStamp = Date.now(); // this method returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC, so it will return a large number that represents the current date and time in milliseconds.
console.log(myTimeStamp); // this will return the current timestamp in milliseconds, which is a large number that represents the current date and time in milliseconds since January 1, 1970, 00:00:00 UTC.

console.log(Math.floor(Date.now() / 100)); // this will give value in seconds

const newDate = new Date();
newDate.toLocaleDateString("default", {
  weekday: "long",
});
