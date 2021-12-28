var num = 1;

console.log('execution context: 1');
console.log('execution context: 2');
function sayMe(){
    console.log('execution context: 3');
}
sayMe();
console.log('execution context: 4');
sayMe();

//execution context: 

//execution context depends upon 3 things
//variable object : fun declarations a scanned and made available
//scope chain : Variable declarations are scanned and made undefined
//this

tipper("5");

function tipper(a){
    // var bill = a;
    var bill = parseInt(a);
    console.log(bill+5);
}
// tipper();
// tipper("5");

bigTipper("200")

function bigTipper(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

// bigTipper("200")


// maxTipper("500")   //it will throw error bocz now this is variable not a function

var maxTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

maxTipper("500")

//
console.log(name);
var name = 'Nidhi' // but comment this then global context throw error if not then it knows that u declired variable but show undefine

//
console.log(title);
var title = "Verma"

function sayTitle(){
    var title = "Ajai"
    console.log(title);
}
sayTitle();
console.log(title);