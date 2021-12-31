var returnedValue = Math.max(2, 5, 7, 4, 2, 9, 8);
// console.log(returnedValue);

//

var myObj = {}
Object.assign(myObj, {a:1, b:2, c:3}, {x:9, y:8, z:7});
// console.log(myObj);

//

function sumOne(a, b) {
    return a + b;
}
// console.log(sumOne(5,4));
// console.log(sumOne(5,4, 1));

//

var myArr = [5, 4] 
console.log(sumOne(myArr));                             //undefine
console.log(sumOne(...myArr));                          //spread
//spread : it take group of value and try to spread
var myArr = [5, 4, 1] 
console.log(sumOne(myArr));                             //undefine
console.log(sumOne(...myArr));                          //spread

//
//REST: is apposite to spread 
//REST convert single code to group of code(array)

function sumTwo(...args) {                              //REST
    console.log("array",args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

//console.log(sumTwo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//

function sumTwo(a, b, ...args) {
    console.log("array",args);
    let mul = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [mul, sum];
}

console.log(sumTwo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));