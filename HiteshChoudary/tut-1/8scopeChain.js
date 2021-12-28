//In Javascript only function in {} is concider as scope not for if or switch or any other

var name = 'Nidhi'

console.log(name);

function sayName(){
    //var name = 'Ajai'
    console.log(name);
    sayNameIn()

    function sayNameIn(){
        //var name = 'Verma'
        console.log(name);
    }
}

sayName();