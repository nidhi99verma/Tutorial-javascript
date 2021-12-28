// function isEven(element) {
//     if(element % 2 === 0){
//         return true;
//     }
//     return false;
// }

//or
// function isEven(element) {
//     return element % 2 === 0;
// }

//or : arrow fun
// var isEven = (element) => {
//     return element % 2 === 0;
// }

//or : callback fun
var isEven = (element) => element % 2 === 0;

console.log(isEven(2)); 

//
// var result = [2, 4, 6, 8].every(isEven);
//var result = [3, 4, 6, 8].every(isEven);
//or
var result = [2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result);