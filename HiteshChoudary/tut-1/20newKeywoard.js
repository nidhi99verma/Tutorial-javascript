//functional approch of defining object
var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCoureseCount = () => {
        console.log(`Course count is : ${this.courseCount}`);
    };
};

var nv = new User('Nidhi', 4); 
console.log(nv);
var av = new User('Ajai', 6);
console.log(av);

//in regular function : 'this' call towards window object
//regular function with 'new' : global object(window) k leya na kam ker k define function 'user' k leya object bnaega

//new: is responsible for invoking constructor and creating unique instance every time