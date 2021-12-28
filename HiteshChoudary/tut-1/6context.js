//context: js has context(global) in which every thing resides and for browser context name is window

//all of the things are registered inside that context
//once fun is registered then that fun wrapped up inside a global context 

//sayHello();
function sayHello(){
    console.log('Nidhi');
}
// sayHello();

var name = 'Nidhi'
// if(name === name){
//     console.log('go');
// }
// if(name === window.name){
//     console.log('go');
// }

//Two type of context: context
//Global
//Execution