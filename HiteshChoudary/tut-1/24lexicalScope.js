//init : for initialization

function init(){
    var firstName = "Nidhi";
    function sayName(){
        console.log(firstName);
    }
    sayName(); //after execution of this fun firstName Vanished
}

var info = init(); //if we declier intier fun as variable then we can use this fun
console.log(firstName);
console.log(info());

//when it is call untill firstName gone then init gone so we are getting error in log