// Synchronous js :- follows the order of execution

console.log("step 1");
setTimeout(() =>{
    console.log("step 3");
},4000);
setTimeout(() => {
    console.log("step 2");
},3000)

let interval = setTimeout(() => {
    console.log("apun run nhi hoga");
},1000)

clearTimeout(interval)