var template;
template = 19;

if (template < 20) {
    console.log("It's very cold outside");
}
else if (template < 30) {
    console.log("It's moderate outside");
}
else {
    console.log("It's really hot outside");
}

//

var email = true;
var google = false;
var facebook = false;

if(email || google || facebook) {
    console.log('Login success');
}

//ternary operator

var authentication = true;

authentication ? console.log('Show signout button') : console.log('Show login button')

//Switch

var user = 'testprep';

switch(user){
    case "admin":
        //return console.log('You get full access');                   //after return it will not execute next line
        console.log('You get full access');
        break;
    case 'subadmin':
        console.log('You get access to create/delete courses');
        break;
    case 'testprep':
        console.log('You get access to create/delete tests');
        break;
    case 'user':
        console.log('You get access to consume content');
        break;
    default:
        console.log('Trial user');
        break;
}