// Promise :- A Promise is an object representing the eventual completion or failure of an asynchronous operation.
/*
    Pending :- Work is undone
    Fulfilled :- Work is done successfully
    Rejected :- Work is done with an error
*/


let promise = new Promise((resolve, reject) => {
    let sucess = false;

    if(sucess){
        resolve("data fetch");
    }
    else{
        reject("data not fetched");
    }
})


console.log(promise);
