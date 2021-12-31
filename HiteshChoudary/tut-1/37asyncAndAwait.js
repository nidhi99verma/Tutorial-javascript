const fun1 = () => {
    return `i am one`;
}

const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('hi...........2'); }, 3000);
        //setTimeout(() => { reject('hi...........2'); }, 3000);      //raising error
    })
}

const fun3 = () => {
    return `i am three`;
}

const callMe = async() => {

    let valOne = fun1();
    console.log(valOne);

    let valTwo = await fun2();
    console.log(valTwo);

    let valThree = fun3();
    console.log(valThree);
}

callMe();

//promise: something which have two state reject and resolve
//if full fill promise then resolve either rejected