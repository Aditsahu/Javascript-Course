var friends = ['Ashish', 'Mahesh', 'Deevish', 'Krishh'];

// returns index of elements
// return value of array


// for(let elements in friends) {
//     console.log(elements)
// }

// for(let elements of friends) {
//     console.log(elements)
// }

friends.forEach(function(element, index, array) {
    console.log(element + ` index=${index}`);
})