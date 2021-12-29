// add obj in proto
var User = {
    firstName: "",
    getUserName: function () {
        console.log(`User name is : ${this.firstName}`);
    }
};

var nv = Object.create(User);
console.log(nv);  // but in browaer it contain __proto , firstName, getUserName //in local it is showing {}
nv.firstName = "Nidhi Verma";
nv.getUserName();
//or
var av = Object.create(User, {
    firstName: { value: "Ajai Verma" },
});
av.getUserName();