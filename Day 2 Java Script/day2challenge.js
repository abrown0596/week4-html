'use strict';

//Integers Fizz challenge
// let i = 1;
// while (i < 101){
//     if (i%15==0){
//         console.log("FizzBuzz")
//     } else if (i%3==0){
//         console.log("Fizz")
//     } else if(i%5==0){
//         console.log("Buzz")
//     } else {console.log(i)}
//     i++
// };


// //99 Bottles of Beer challenge
// for (let i = 99; i >= 0; i--){
//     if (i>0) {
//         console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
//     }    
//     else {
//         console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${i+99} bottles of beer on the wall.`);
//         break;
//     }
// };


//BONUS CHALLENGE:
// for(let i=1;i<101;i++){if(i%15==0){console.log("FizzBuzz")}else if (i%3==0){console.log("Fizz")}else if(i%5==0){console.log("Buzz")}else {console.log(i)}};

//Code I definitely didn't google for Bonus challenge:
for (let i = 1; i < 101;i++) console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);