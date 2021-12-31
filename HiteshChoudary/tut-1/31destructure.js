//destructure is not happanse only with object , it's happens with array and so on

const user = ['Nidhi', 3, 'admin'];

// var role = user[2];
// var name = user[0];

//or

// var [name, courseCount, role] = user;

//console.log(role);

const MyUser = {
    name: "Nidhi",
    courseCount: 5,
    role: "admin"
}

console.log(MyUser.courseCount);

//make sure names are exactly same in object
const {name, courseCount, role} = MyUser

console.log(courseCount);