// LET VS CONST VS VAR

// var => Functions scope
// let and const -> Block scope

// var myName = "Aditya"
// console.log(myName)

// myName = "sahu"
// console.log(myName)


function biodata() {
    let myFirstName = "Aditya";
    console.log(myFirstName)

    if(true) {
        let myLastName = 'Sahu';
        console.log("inner " + myLastName);
        console.log("inner " + myLastName);
    }
    console.log("innerOuter " + myLastName);
}

// Call function
biodata();