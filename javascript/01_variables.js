// in strongly typed lang - datatype var_name = value;
// but js is loosely typed lang - it assigns datatype to variables

var age = 22;
console.log(age);

age = "xy";
console.log(age);

// scope of var is global
if(1) {
    var name = "devanshi";
}

console.log(name);

// this doesnt give error but, prints undefined
console.log(num);
var num = 2;

// let is local
{
    let k = 0;
}
// this gives error
// console.log(k);

// const is local and its value cannot be changed
const n = 10;
n = 11;