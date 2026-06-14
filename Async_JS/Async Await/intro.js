async function greet() {
  let result =  Promise.reject("hello js");
  let result2 = Promise.resolve("hello js2");

  console.log(result2);
}

greet();