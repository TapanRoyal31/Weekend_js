// setInterval :- executes a function repeatedly at specified intervals

let count = 0;
let interval = setInterval(() => {
    count++;
    if (count <= 10) {
        console.log('count :',count);
    } else {
        console.log("CountDown Is khatam");
        clearInterval(interval);
    }
}, 1000);

