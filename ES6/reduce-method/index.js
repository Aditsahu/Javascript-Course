let arr = [5, 6, 2];

let sum = arr.reduce((accumulator, curElm, index, arr) => {
    return accumulator += curElm;
},7)
console.log(sum);