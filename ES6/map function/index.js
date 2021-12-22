// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[, index[, arra]]) {
    // return element for newArray, after executing smthg
// }[, thisArg]);

// Returns a new array containing the results of calling a function on every elemnet in this array.
// Returns new array without mutating original array

const array1 = [1, 4, 9, 16, 25];
let newArr = array1.map((curEle, index, arr) => {
    return curEle>9;
})
console.log(array1); 
console.log(newArr);