const arr = [3, 4, -1, 2, 8, 0];
console.log(arr[0]);
arr.pop();
console.log(arr.indexOf(-1));
arr.reverse();

// it is a higher order func which accepts a callback func as an argument
arr.forEach((val) => {console.log(val)});

let sum = 0;
// map returns a new arr while foreach doesnt
let pref_sum = arr.map((val) => {
    sum += val;
    return sum;
})

console.log(pref_sum);

console.log(arr.find((val) => val === 4));

let even_arr = arr.filter((val) => val % 2 == 0)
console.log(even_arr);

let newarr = arr.slice(1,4);
console.log(newarr);

let new_arr = arr.splice(2,4);
console.log(new_arr);
console.log(arr);