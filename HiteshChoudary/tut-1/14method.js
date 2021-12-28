var user = {
    firstName: 'Nidhi',
    lastName: "Verma",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`
    },
}

var courseList = true;
// console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("ReactJS");
user.buyCourse("Angular");
console.log(user.getCourseCount());