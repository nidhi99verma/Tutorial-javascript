// for(let i = 0; i < 6; i++) {
//     console.log(`Iteration num : ${i}`);
// }

var state = ["Rajasthan", "Delhi", 12, "Mumbai", "Assam"]

for (let i = 0; i < state.length; i++) {
    if (typeof state[i] != "string") break;
    //if(typeof state[i] != "string") continue;
    console.log(state[i]);
}

console.log('----------------while');
//

let i = 0;
while (i < state.length) {
    console.log(state[i]);
    i++;
}

console.log('----------------do while');
//

let j = 0;
do {
    console.log(state[j]);
    j++;
} while (j < 10)
// }while (j < state.length)

console.log('----------------forEach');
//
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((element, index) => console.log(`${index}: ${element}`));

console.log('----------------forOf: for Array');
//
const names = ['youtube', 'facebook', 'instagram', 'netflix', 'amazon']
for (const n of names) {
    console.log(n);
}

console.log('----------------forIn: for Object');
//
const sorty = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram",
    nf: "netflix",
    az: "amazon"
}
for (const a in sorty) {
    console.log(a + ":" + sorty[a]);
}