// Async JS :- JS code Excute the function after another function result/outcome

// function greet(name, cb) {
//     console.log('hello',name);
//     cb();
// }

// function afterme(){
//     console.log('I am after the greet function');
// }

// greet('Koi bhi',afterme);

// setTimeout(() => {

// },1000)
// -------------------------------------------------------------------------------------------------------
// Nested Callback :- Callback Hell

function steps() {
  setTimeout(() => {
    console.log("step 1");
    setTimeout(() => {
      console.log("step 2");
      setTimeout(() => {
        console.log("step 3");
      }, 1000);
    }, 1000);
  }, 1000);
}

steps();
