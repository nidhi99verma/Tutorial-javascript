var user = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCoureseCount = () => {
        console.log(`Course count is : ${this.courseCount}`);
    };
};

//injecting more property in object from the outside of function

user.prototype.bio = function(){
    console.log(`Hey my name is ${this.firstName} and I'm subscribing ${this.courseCount} courses`);
}
// user.prototype.bio = () => {
//     console.log(`Hey my name is ${this.firstName} and I'm subscribing ${this.courseCount} courses`);
// }

var nv = new user('Nidhi', 4);
nv.getCoureseCount();
console.log(nv.firstName);
// nv.bio();
if(nv.hasOwnProperty("firstName-")){
    nv.bio();
}

var av = new user('Ajai', 6);
av.getCoureseCount();
console.log(av.firstName);
// av.bio();
if(av.hasOwnProperty("firstName")){
    av.bio();
}