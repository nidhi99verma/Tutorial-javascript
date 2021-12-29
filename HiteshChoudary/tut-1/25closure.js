function init(){
    var firstName = "Nidhi";
    console.log("I am init");
    function sayName(){
        console.log(firstName);
    }
    return sayName;         //init reference is not deleted because we are returning reference of function(not calling function)
}

var value = init(); 
// console.log(firstName);
// value();


//ex

function doAddition(x){
    return function(y){
        console.log(`x: ${x} and y: ${y}`);
        return x + y;
    };
}

var add = doAddition(4);
// console.log(add(5));
//or
console.log(doAddition(6)(5));

//doAddition function contains reference of one function so it can not vanished memory because of closure