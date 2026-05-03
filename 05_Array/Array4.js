// Some Every and find

let arr = [-9, 3, -5, -8, 6, -5];


let result = arr.some((value) => value > 0); // true
let result1 = arr.every((value) => value > 0); // false
let result2 = arr.find((value) => value > 0); // 3

console.log("Some:",result);
console.log("Every:",result1);
console.log("Find:",result2);


// Find the first string value
// let trial = [{},["52"],true,'hello',"hi",123,"123"];