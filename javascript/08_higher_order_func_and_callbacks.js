// higher order function - function which takes another function as an argument
// if a task is time-consuming or takes a lot of time, a callback function is passed which gets called when the task is completed
function add(a,b,cb) {
    let res = a + b;
    cb(res);
}

add(2,4,(res) => {
    console.log(res);
});

function add2(a,b,cb) {
    let res = a + b;
    cb(res);

    return () => {
        console.log(res);
    }
}

let func = add2(2,4,() => {});
func();