// Hoisting :- hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their 
// containing scope during the compilation phase. This means that you can use variables and functions before they are declared in 
// the code.


// var a;

// console.log(a);

// var a = 10;

// console.log(a);


// closure :- closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned.

/*
function outerFunction() {
    var outerVariable = 'I am from the outer function';

    
    function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable
    }
    return innerFunction;
}

outerFunction();
*/

/*
Simple Counter
Create a function createCounter() that:

Returns a function
Each time it's called, it increases and returns a count

👉 Expected:
const c = createCounter();

c(); // 1
c(); // 2
c(); // 3

💡 Hint: Use a variable inside the outer function
*/


function createCounter(){
    var count = 0;
    function Counter(){
        count++;
        console.log(count);
        return count;
    }

    return Counter;
}

const c = createCounter();

c();
c();
c();