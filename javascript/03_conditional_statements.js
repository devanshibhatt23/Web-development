const age = 22;

if(age >= 18) {
    console.log("you can vote");
}
else {
    console.log("you can't vote");
}

// ternary operator
age >= 18 ? console.log("you can vote") : console.log("you can't vote");

const option = 4;
switch(option) {
    case 1 : console.log("hello");
    break;
    case 2 : console.log("namaste");
    break;
    default: console.log("enter correct number");
}