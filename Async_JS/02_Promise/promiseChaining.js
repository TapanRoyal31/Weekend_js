let promise = new Promise((resolve, reject) => {
    resolve(5);
})

let result = promise
    .then((num) => {
        return num * 2; // 10
    })
    .then((num) => {
        return num * 2; // 20
    })
    .then((num) => {
        console.log(num * 2); // 40
    })
