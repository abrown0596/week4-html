'use strict';

//Tutorial:

// // OBJECTS, ARRAYS + JSON
// //-------------------------

// // OBJECTS

// // collection of data in ANY order
// // made up of KEY : VALUE pairs

// // creating an object

// let animal = new Object();
// console.log(typeof(animal));

// animal["name"] = "Clifford";
// animal["type"] = "Dog";
// animal["size"] = "Big";

// console.log(animal);

// // you can expand objects whenever you like!

// animal.colour = "Red";

// console.log(animal);

// // there is also a LITERAL notation

// let vehicle = {
//   "type" : "bike",
//   "seats" : 1,
//   "wheels" : 2
// }

// console.log(typeof(vehicle));
// console.log(vehicle);

// // ARRAYS

// // creating one with LITERAL notation

// let garage = [
//   vehicle,
//   {"type" : "car", "seats" : 5, "wheels" : 4}
// ]

// console.log(typeof(garage));
// console.log(garage);

// // iteration through an array

// let x = [1,2,3,4,5];

// // normal FOR loop

// for (let i = 0; i < x.length; i ++){
//   console.log(x[i]);
// }

// let y = ["a","b","c","d","e"];

// // enhanced FOR loops

// for ( let item of y ) {
//   console.log(item);
// } 

// // ARRAY OBJECT METHODS
// // will mutate original array

// // reverse method
// console.log(y.reverse());

// // join method
// console.log(y.join(" ! "));




// // JSON
// // JavaScript Object Notation
// // ---------------------------
// // the LITERAL notation for objects

// let newJSON = {
//   "name" : "cameron",
//   "age" : 29,
//   "key" : "value"
// }

// // convert JSON to String
// let str = JSON.stringify(newJSON);
// console.log(newJSON);
// console.log(str);

// // convert String to JSON
// let notAString = JSON.parse(str);
// console.log(notAString.name);

//------------------------------------------------------------------------------------
//QA Ex 1
// let darthVader = {
//     "allegiance": "empire",
//     "weapon": "lightsabre",
//     "sith":"true"
// };
// console.log(darthVader);

//Ex 2
// console.log(`Darth Vader's allegiance is to the ${darthVader["allegiance"]}.`);
// console.log(`Darth Vader's weapon of choice is a ${darthVader["weapon"]}.`);
// console.log(`Darth Vader is a sith? ${darthVader["sith"]}.`);
// console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}.`);

//Ex 3
// let myArray = ["hello","everyone"];

// console.log(myArray.length);

// console.log("");

// myArray.push("this","is a","push");
// console.log(myArray);
// console.log(myArray.length);

// myArray.shift();

// console.log("");
// console.log("USING A FOR LOOP IN AN ARRAY:");
// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// };
