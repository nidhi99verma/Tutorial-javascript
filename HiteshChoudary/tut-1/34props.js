class User {

    constructor(name, email) {
        this.name = name,
            this.email = email
    }
    #courseList = [];                      //# make private to variable               
    getInfo() {
        return { name: this.name, email: this.email }
    }
    enrollCourse(name) {                   //setter
        this.#courseList.push(name)
    }
    getCourseList() {                      //getter
        return this.#courseList;
    }
}

module.exports = User;
//without # (when courseList is not private)

// const rock = new User('rock', 'rock@rock.com');
// console.log(rock.getInfo());
// rock.enrollCourse('Angular');
// console.log(rock.getCourseList());
// console.log(rock.courseList);

//getter: is simpale methode which helps u to grab some of information from class
//getter : in we useually just return variable not accept parameter
//setter: in expect some parameter because we set some value which is private to the class.

//using //#endregion

const rock = new User('rock', 'rock@rock.com');
console.log(rock.getInfo());
rock.enrollCourse('Angular');
console.log(rock.getCourseList());
console.log(rock.courseList)