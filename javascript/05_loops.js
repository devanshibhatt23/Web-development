for(let i=0; i<5; i++) {
    console.log(i);
}

let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

let num = 40;
let guess;

do {
    guess = prompt("guess a number") * 1;
    if(guess == 40) {
        console.log("correct");
        return;
    }
} while(guess != num);