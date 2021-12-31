class User {

    constructor(name, email) {
        this.name = name,
            this.email = email
    }
    #courseList = [];                       //# make private to variable               
    getInfo() {
        return { name: this.name, email: this.email }
    }
    enrollCourse(name) {                    //setter
        this.#courseList.push(name)
    }
    getCourseList() {                       //getter
        return this.#courseList;
    }
    // static login() {                      //private u can't inherit this one
    login() {
        return "You are loged in";
    }
}


class SubAdmin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I am subadmin";
        //super.login();   //or

    }
    // login() {                              //override    
    //     return"login for admin only";
    // }

}



module.exports = User;


// const rock = new User('rock', 'rock@rock.com');
// console.log(rock.getInfo());
// rock.enrollCourse('Angular');
// console.log(rock.getCourseList());
// console.log(rock.courseList)

///

const tom = new SubAdmin('tom', 'tom@jerry.com');
console.log(tom.getAdminInfo());
// console.log(tom.login());  //error bcz private fun
console.log(tom.getInfo());
console.log(tom.login()); 