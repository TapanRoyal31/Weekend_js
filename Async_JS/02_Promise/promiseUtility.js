// promise all
// promise allsetteled
// promise race
// promise any

// ----------------------------------------  all  -----------------------------------
// let promise1 = Promise.resolve("Hello");
// let promise2 = new Promise((resolve,reject) => {
//      resolve();
// });
// let promise3 = Promise.resolve("Script");
// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     }) // need to resolve all promises

// ---------------------------------------- all setteled ------------------------------------
// let promise1 = Promise.resolve("Hello");
// let promise2 = new Promise((resolve,reject) => {

// });
// let promise3 = Promise.resolve("Script");

// Promise.allSettled([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     }) // need all state fullfilled in resolve or else reject state!!!

// --------------------------------------   race   --------------------------------------

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First");
//     }, 3000);
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second");
//     }, 2000);
// })

// Promise.race([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// ------------------------------------------------------- any ---------------------------------------------------
let promise2 = new Promise((resolve,reject) => {
    resolve("java");
});
let promise1 = Promise.reject("Hello");
let promise3 = Promise.reject("Script");

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
