'use strict';

// import * as DOM from './dom.js';

let firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';

let paras = document.querySelectorAll('p');
for(let p of paras){
    p.style.color = 'red';
}

function foo(){return "ALERT"}
let btn = document.querySelector('button');
btn.addEventListener('click',foo);

let pEle = document.createElement('p');
