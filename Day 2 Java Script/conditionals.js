`use strict`

// CONDITIONALS

// Truthy and Falsey

// FALSEY
// false
// 0
// ``
// undefined
// null
// NaN - not a number

// IF (ELSE IF and ELSE)
// check a condition -> run a code block if condition is met

// let a = 2; 

// if( a == 0 ) {
//   console.log(`sunshine`);
// } else if (a != 2) {
//   console.log(`moonlight`);
// } else {
//   console.log(`boogie`);
// }


// // TERNARY IF

// // shorthand version of an IF ELSE statement

// let x = 1;

// if (x == 2){
//   console.log(`x is 2`);
// } else {
//   console.log(`x is not 2`);
// }

// x == 2 ? console.log(`x is 2`) : console.log(`x is not 2`);

// 1 == `1` ? console.log(`true`) : console.log(`false`);

// // strictly equal operator
// // ===
// // also checks data type

// 1 === `1` ? console.log(`true`) : console.log(`false`);


//QA Exercises
// Ex1
let strictA = true;
let strictB = 1;

console.log("Ex1")
console.log((strictA == strictB))
console.log((strictA === strictB))
console.log("")

//Ex2
console.log("Ex2")
console.log(strictA != strictB);
console.log(strictA !== strictB);
console.log("")
console.log("")

let age = 10

//Ex3
console.log("Ex3")
if (age < 18) {
    console.log("Underage")
} else if (age > 64){
    console.log("You old")
} else {console.log(`You fit the age requirements by being ${age} years old`)}

console.log("")

//Ex4
console.log("Ex4")
age <= 50 ? console.log("Age is less than 50") : console.log("Age is greater than 50")
