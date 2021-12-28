// var result = [2, 4, 6, 8].every((e) => (e % 2 === 0));
// console.log(result);

var testArray = [2,4,6,3,1,5,9,8]
// console.log(testArray.fill("n"));
// console.log(testArray.fill("n", 2));
//start range is inclusive
//end range is exclusive
//console.log(testArray.fill("n", 2, 5));

// const myNumber = [23, 24, 25, 55, 66, 77, 87, 98]
// const result = myNumber.filter((num) => num != 55)
// console.log(result);
// const result2 = myNumber.filter((num) => num < 55)
// console.log(result2);

var state = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// state.splice(1, 2)   //1: index 2: count
// console.log(state);

// state.splice(1, 2, "Utter Pradesh")   //1: index 2: count
// console.log(state);

// state.splice(1, 2, "Utter Pradesh", "Goa")
// console.log(state);

state.splice(1, 2, "Utter Pradesh", "Goa", "Punjab")
console.log(state);

// console.log(state.slice(1,3));