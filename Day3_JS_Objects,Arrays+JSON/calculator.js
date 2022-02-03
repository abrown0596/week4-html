
//---Importing from DOM
import * as DOM from "./dom.js";

//--- Adding Title through DOM
// DOM.title.innerText = "Adam's Calculator";
// DOM.body.append(title);

DOM.addButton.onclick = () => addition(DOM.input1.value,DOM.input2.value);
DOM.subtractButton.onclick = () => subtraction(DOM.input1.value,DOM.input2.value);
DOM.multiplyButton.onclick = () => multiplication(DOM.input1.value,DOM.input2.value);
DOM.divideButton.onclick = () => division(DOM.input1.value,DOM.input2.value);
DOM.equalsbutton.onclick = () => 

function addToList(str) {

    let line = document.createElement('li');
    line.classList.add('list-group-item');
    line.innerHTML = str;
    DOM.list.appendChild(line);
}


function addition(a,b){
    let result = Number(a) + Number(b);
    addToList(`${a} + ${b} = ` + result);
}

function subtraction(a,b){
    let result = Number(a) - Number(b);
    addToList(`${a} - ${b} = ` + result);
}

function multiplication(a,b){
    let result = Number(a) * Number(b);
    addToList(`${a} * ${b} = ` + result);
}

function division(a,b){
    let result = Number(a) / Number(b);
    addToList(`${a} / ${b} = ` + result);
}