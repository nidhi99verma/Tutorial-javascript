//setInterval: condition will work till given interval
let count = 1;

setInterval(() => {

    if (count < 50) {
        count++;
        console.log(count);
    }
}, 100)

//setTimeout: it will work after given interval

setTimeout(() => {
    console.log("after 3 sec time");
}, 3000)