// falsy-value:
// undefine
// null
// 0
// ''
// NaN

var user;
var temperature = null;
var arry = [];
var name = '';


if(!temperature){
    console.log(user);
    console.log(temperature);
    console.log(arry.length);
    console.log(name);
}

//coercion

console.log("2"+2);

var val = "2"

if(2 == val){
    console.log('coercion');
}

if(2 === val){
    console.log('check type');
}