//https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

const fun1 = () => {
    console.log(`i am one`);
}
const fun2 = () => {
    //async
    setTimeout(() => {console.log('hi...........');}, 3000); //noneblocking i/o
    //sync
    console.log(`i am two`);
}

const fun3 = () => {
    console.log(`i am three`);
}

// fun1();
// fun3();
// fun2();
fun1();
fun2();
fun3();

//event loop: event loop handle all events
//Each message is processed completely before any other message is processed.