// Javascript object represent a single moment in time in a platform-independent
// format. Date object contains a number that represents milliseconds since
// 1 January 1970 UTC.

// Creating date objects
// There are four ways to create a new date object :
// 1) new Date()
// 2) new Date(year, month, day, hour, minutes, seconds, milliseconds)
// 3) new Date(milliseconds)
// 4) new Date(date string)

// GET date & time in UTC format
let currentDate = new Date();
console.log(currentDate);


// GET current-time according to local time zone
console.log(new Date().toLocaleString());
console.log(new Date().toString());


// Date.now()
// Returns the numeric value corresponding to the current time-the number
// of milliseconds elapsed since January 1, 970 00:00:00UTC
console.log(Date.now())


// new Date(date string)
var d = new Date("23 December 2021, 11:13:00");
console.log(d.toLocaleString());