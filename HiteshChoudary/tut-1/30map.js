var myMap = new Map();

myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

console.log('-----------------------');

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}

console.log('-----------------------');
//in map loop 1st give key and 2nd value
for(let [key, value] of myMap){
    console.log(`Key : ${key} and Value : ${value}`);
}
console.log('-----------------------');
//in forEach loop 1st give value and 2nd key
myMap.forEach((value, key) => console.log(`Value: ${value} and Key: ${key}`))

console.log('-----------------------');

myMap.delete(2)
console.log(myMap);