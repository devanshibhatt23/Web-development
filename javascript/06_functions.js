// a,b - arguments
function divide(a,b) {
    return a / b;
}

let k = divide(20,3);
console.log(k);

// variable arguments
function add() {
    console.log(arguments);
    let sum = 0;
    for(let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
console.log(add(2,3,1,5,6));

// rest syntax
// spread operator
function add2(...nums) {
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}
console.log(add2(2,3,1,5,6));