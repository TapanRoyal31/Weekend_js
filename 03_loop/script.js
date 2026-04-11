// let a = parseInt(prompt("Enter the number :"));
// let a  = 12;

// for (let i = 0; i <= a; i++) {
//    if(i % 2 == 0)
//    {
//     console.log('Even',i);
//    }
//     else
//     {
//         console.log('Odd',i);
//     }
// }
// --------------------------------------------------------------------------------
// let text;
// if (confirm("are you vedant") == true) {
//   text = "You pressed OK!";
// } else {
//   text = "You canceled!";
// }

// alert(text);

// ----------------------------------- Task 1 ---------------------------------------------

/*
*
**
***
****
*****
*/

// let str = '';

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += '*'
//     }
//     console.log(str);
//     str = '';
// }


// -------------------------------- Count Digit -----------------------------------------------
/*
    Task 6: Count Digits
    Input: 987654
    Expected Output: 6 
*/

// let number = 987654
// let temp = number;
// let count = 0;
// while (temp > 0) {
//     temp = parseInt(temp / 10);
//     count++;
// }

// console.log(count);

// --------------------------------------- Float value problem --------------------------------

// console.log(0.1 + 0.2);

//----------------------------------------- Math Object ---------------------------------------

// let number = (Math.random() * 10);
// let max = Math.min(10,20);
// console.log(number);
// console.log(Math.ceil(number));

// let number = 11

// console.log(Math.pow(number,4));

console.log("hello" && false);
console.log(100 || 200 || 0);
console.log(0 ?? "hello"); // Nullish operator
