class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo() {
        return {name: this.name, email: this.email}
    }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList() {
        return this.courseList;
    }
}

// module.exports = User;

// const User = require('./cls');

let nidhi = new User('Nidhi', 'nidhi@verma.co');  //obj

console.log(nidhi);
console.log(nidhi.getInfo());
console.log(nidhi.getInfo().email);

nidhi.enrollCourse('React');
nidhi.enrollCourse('Node');
nidhi.enrollCourse('c');
console.log(nidhi.getCourseList());

let cources = nidhi.getCourseList();

cources.forEach(c => console.log(c))

//constructor is method as soon as object is created