// Multiply each element by 2 and return only those elements which are greater than 10

let arr = [2, 3, 4, 6, 8];

let result = arr.map( (curElm)=> {
    return curElm *2;
}).filter((curElm) => {
    return curElm > 10;
})

console.log(result);