function sayHello(){
    console.log("Nidhi");
}

//call function
// sayHello();
// sayHello();

//reference function
sayHello

function printName(name){
    console.log("Welcome");
    console.log(`hello ${name}`);
}

// printName();
// printName('Nidhi');

function showMe(){
    return "You know this"
}

showMe();
var val = showMe();
//console.log(val);

//or 

var showYou = function showNow(){
    return "You know this..."
}
//arrow fun
// var showYou = () => {
//     return "You know this..."
// }

// console.log(showYou);
// console.log(showYou());

//ex:

function getUserRole(name, role){

    switch(role){
        case "admin":
            return `${name} You get full access`                
            //break;
        case 'subadmin':
            return `${name} You get access to create/delete courses`
            //break;
        case 'testprep':
            return `${name }You get access to create/delete tests`
            //break;
        case 'user':
            return `${name} You get access to consume content`
            //break;
        default:
            return `${name} Trial user`
            //break;
    }
}

var info = getUserRole('Nidhi', 'admin');
console.log(info);