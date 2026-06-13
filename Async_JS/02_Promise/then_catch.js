// Then and Catch :- Fullfill and rejected state

let promise = new Promise((resolve, reject) => {
  let sucess = true;

  if (sucess) {
    resolve("data fetch");
  } else {
    reject("data not fetched");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("finnaly block run");
  })



/*
1. Basic Resolve
    Create a promise that resolves after 2 seconds with the message:
    "Task completed"

    Use .then() to display the result.

2. Basic Reject
    Create a promise that rejects after 1 second with the message:
    "Something went wrong"

    Use .catch() to display the error.

3. Resolve + Finally
    Create a promise that resolves after 1 second with:
    "Success"

    Display the result using .then() and print:
    "Promise finished"

    using .finally().

4. Reject + Finally
    Create a promise that rejects after 1 second with:
    "Failed"

    Handle the error and always print:
    "Operation completed"

    using .finally().

5. Login Validation
    Create a function:
    login(username, password)
    Resolve if username is "admin" and password is "1234".
    Reject otherwise.

    Handle success and failure using .then() and .catch().

6. Age Verification
    Create a function:

    checkAge(age)
    Resolve if age is 18 or older.
    Reject if age is below 18.

    Display appropriate messages.
*/