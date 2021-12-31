const nidhi = {
    firstName : "Nidhi",
    lastName : "Verma",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
            first name is ${this.firstName}
            last name is ${this.lastName}
            his role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    }
}

//(poroto) in browser if u see then get some property attached to direct object some property directly attached to method on inside object

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
}

nidhi.getInfo();
// dj.getInfo();

// nidhi.getInfo.bind(dj)();
//or
var djInfo = nidhi.getInfo.bind(dj); //getInfo method in nidhi object but to bind this getInfo method with dj we can use 'bind'
// djInfo();

//bind give u refernce back we have to call this
//call same like bind but we do not need to call

nidhi.getInfo.call(dj);
