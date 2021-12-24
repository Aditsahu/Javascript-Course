//  What is Object Literals

// object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// we refer this as an object

// How to create an Object ?

// 1st way
// let bioData = {
//     myName : 'Aditya Sahu',
//     myAge : 26,
//     getData : function() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }
// }
// bioData.getData();




// 2nd way no need to write function as well after ES6
let bioData = {
    myName : 'Aditya Sahu',
    myAge : 26,
    getData() {
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
    }
}
bioData.getData();