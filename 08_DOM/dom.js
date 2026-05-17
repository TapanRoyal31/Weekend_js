// DOM :- Document Object Model

// document.body.style.backgroundColor = 'orangered';


/*
    Dom selectors
    1. getElementById :- it will return the element which has the id that we have passed in the function. It will return only one element because id is unique for each element.
    2. getElementsByClassName :- it will return a collection of elements which have the class that we have passed in the function. It will return multiple elements because multiple elements can have the same class.
    3. getElementsByTagName :- it will return a collection of elements which have the tag name that we have passed in the function. It will return multiple elements because multiple elements can have the same tag name.
    4. querySelector :- it will return the first element which matches the CSS selector that we have passed in the function. It will return only one element because it returns the first match.
    5. querySelectorAll :- it will return a collection of elements which match the CSS selector that we have passed in the function. It will return multiple elements because multiple elements can match the same CSS selector.
*/

//  let element = document.getElementById('id1');
    // let element = document.getElementsByClassName('cls');
    // for (let i = 0; i < element.length; i++) {
    //     console.log(element[i]);
    // }

    // let element = document.getElementsByTagName('p');
    // let element = document.querySelector('.cls');
    // let element = document.querySelectorAll('#id1');

// console.log(element);
// --------------------------------------------------------------------------------


let element = document.getElementById("hidden");

console.log(element);


