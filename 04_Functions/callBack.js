function greet(name, heelo) {
  console.log("Hello " + name);
  heelo(); // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("User", sayBye);