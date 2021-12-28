console.log(this); // in local it is blank: {} but in browser : Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// var game = "basketball"

// function sayName(){
//     var name = "Nidhi"
//     console.log(this);
// }

// sayName();

//for function in local and in browser i m getting window object in both places
//it means if in local we do not have any thing and log this then we can not access window object but
//same with browser we can access
//this: current context or reference of global context

//all regular function call , this points to windows obj

//Below fun is not regular fun( object fun call)

var user = {
    firstName: "Nidhi",
    lastName: "Verma",
    getCourseCout: function(){
        console.log("this1 -> ", this);
        //regular function
        function getLoginCount(){
            console.log("8")
            console.log("this2 -> ", this);
        }
        getLoginCount();
    }
}

user.getCourseCout();


//regular function
// function showMe(){
//     console.log("Hello");
// }
// showMe();