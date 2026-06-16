const add = (a,b) => {
    return a+b;
}

console.log(add(3,5));

// arguments keyword is not defined in case of arrow func
const x = () => {
    console.log(arguments);
}

x(1,2,3);

// hoisting - only in normal func, not in arrow function
a();
// error
b();

function a() {
    console.log("hey");
}

const b = () => {
    console.log("hey");
}

// this keyword - in normal funcs, it points to the obj, but in arrow func, this keyword refers to the window obj or browser window
const obj = {
    val: 20,
    func: function() {
        console.log(this.val);
    },
    func2: () => {
        console.log(this);
    }
}

obj.func();
obj.func2();