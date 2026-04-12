// Arrow functions :- only for single line code no need to write return keyword and curly braces  

// normal function

// function greet(){

// }

// Arrow

// let greet = () => {
//     console.log("fire!!!");
//     console.log("fire!!!");
//     console.log("fire!!!");
    
// }

// greet();

// IIFE :- Immediately Invoked Function Expression

(function (name){
    console.log("IIFE Called!!" , name);
}) ("John");

// IIFE with arrow function

(() => console.log("helloo")) ()