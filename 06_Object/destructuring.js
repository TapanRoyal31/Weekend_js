// let Student = {
//   name: "Alex",
//   rollno: 1,
//   address: {
//     city: { name: "New York" },
//     street: "That Street",
//   },
// };

// let { name, rollno } = Student;

// console.log(name);

// let arr = [1, 2, 3, 4, 5];

// let [a,b,...c] = arr; // ... rest operator

// console.log(a);
// console.log(b);
// console.log(c);
// ---------------------------------------------------------------------------------------------
// nested destructuring

// let Student = {
//   name: "Alex",
//   rollno: 1,
//   address: {
//     city: { name: "New York" },
//     street: "That Street",
//   },
// };

// let {
//   address: addr,
//   address: { city: town, street: gali },
// } = Student;

// console.log(addr);
// console.log(town);
// console.log(gali);

// gali = "sadi gali"

// console.log(Student);
// -------------------------------------------------------------------------

// Function parameter destructuring

// function display(a,...b){
//     console.log("a : ",a);
//     console.log("b : ",b);
// }

// display(1,2,3);

// let a = 10;
// let b = 20;

// console.log("a :", a, "b :", b);

// [b, a] = [a, b];

// console.log("a :", a, "b :", b);