// Find the square root of each elements in an array

let arr = [25, 16, 9, 4, 1];

let arrSqr = arr.map((curElm) => {
    return Math.sqrt(curElm);
});

console.log(arrSqr)