'use strict';

// //FOR

// //uses a counter
// //run unil a condition is met

// for(let i =0; i<10; i++) {
//     console.log(`i = ${i}`);
// }

// //WHILE

// //works with booleans
// //runs while a condition is 'true'

// let condition =true;
// let i =0;

// while (condition == true) {
//     console.log(`increment me!`);
//     i++;

//     if(i>=3) {
//         condition =false;
//     }
// }

// //DO-WHILE

// //Like a while loop
// //always runs at least ONCE

// let a = false;
// do {
//     console.log(`run forest run`);
// } while (a==true);

// //SWITCH CASES

// //run until a break or return
// //often more effective than large if-else statements

// let num = 0;

// switch(num) {
//     case 0:
//         console.log(`number is zero`);
//         break;
//     case 1:
//         console.log(`number is one`);
//     case 4:
//         console.log('we are now at 4');
//         break;
//     default:
//         console.log('something went wrong');

// }

//EXAMPLE FLOW CHART

// let i =2;
// while (i <= 6) {
//     console.log(i+1);
//     i +=2;
// }

// Iteration Tutorial

//FOR
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }

//WHILE
//   let puppies = 0;
//   let notEnoughPups = true;
  
//   while (notEnoughPups) {
//     console.log("Another pup");
//     puppies++;
  
//     if (puppies > 238) {
//       notEnoughPups = false;
//     }
//   }
//   console.log("Oh so many puppies!");

//EXERCISE 1

// let a = 100;
// while(a<= 200) {
//     a++;
//     console.log(`a = ${a}`);
// }

//Exercise 2

// let a = 100;
// while (a<=200) {
//     if(a%2==0) {
//         console.log(`${a}-`);
//         a++;
//     }
//     console.log(`${a}*`);
//     a++;
// }

//EXERCISE 3
// for (let a =1; a<=10; a++){
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
//     console.log(a)
// }
//solution for ex3:
//  for (let i = 0; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(j);
//       }
//    }  

//EXERCISE 4



//EXERCISE 5
// let a = 1;
// switch (a) {
//     case (a<6):
//         console.log("Weekday")
//         break;
//     case (5<a<8):
//         console.log("Weekend")
//         break;
//     default:
//         console.log("Enter valid day number");
// } //WRONG!

//solution for ex5:
let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}


