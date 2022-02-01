'use strict';
// //variables are dinamic and mutable


// //standard variables are:

// let a =1;
// const b = 2;
// var c = 3;

// // CamelCase for naming. E.g. This Sentence Is In Camel Case

// let aBoolean = true;
// console.log(aBoolean);

// let aNumber = 6;
// console.log(aNumber);

// let aString = "text";
// console.log(aString);

// let aBigInt = 99999999;
// console.log(aBigInt);

// let aNull = null;
// console.log(aNull);

// let anUndefined;
// console.log(anUndefined); //null and undefined are different

//  let myObject = {
//     key: 'value',
//     anotherKey : 12345
//  };
//  console.log(myObject);

// let string1 = '34+3 = ';
// let result = 34 + 3;
// console.log(string1 + result);

// let string2 = '33 * 872 = ${33*872}';
// console.log(string2);

// QA exercise
// let a;
// let b = "12345";
// let c = 12345;
// let d = true;
// let e = {a:"JavaScript"};

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

//QA exercise 2
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(typeof(totalMoney));
console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);
