let firstNum = "";
let secondNum = "";
let operator = "";
let display = document.querySelector(".display");
display.textContent = "0";

function operate(first, sign, second){
    let result = 0;
    first = parseFloat(first);
    second = parseFloat(second);

    if (sign == "+"){
        result = add(first, second)    
    }
    else if (sign == "-"){
        result = subtract(first, second)    
    }
    else if (sign == "*"){
        result = multiply(first, second)    
    }
    if (sign == "/"){
        result = divide(first, second)    
    }

    return result
}

function add (first, second){
    return first + second;
};

function subtract(first, second){
    return first - second;
};

function multiply(first, second){
    return first * second
};

function divide(first, second){
    return first / second;
};

function updateDisplay(item){ //Add function to allow decimal on second number
    if (display.textContent == "0" && item != "."){
        display.textContent = item;
    } else if (display.textContent == "0."){
        display.textContent += item;
    } else if (display.textContent.includes(".") && item =="."){
        display.textContent = display.textContent;
    } else {
        display.textContent += item;
    }
}

function backspace(){
    if (display.textContent.length == 1){
        display.textContent = 0;
    } else {
        display.textContent = display.textContent.slice(0,-1);
    }
}

function resetToZero(){
    firstNum = "";
    secondNum = "";
    display.textContent = "0";
}

function storeDisplay(operation){
    operator = operation;

    if (firstNum.length == 0){
        firstNum = display.textContent;
        display.textContent += operation;
    } else if (firstNum.length > 0){
        let position = 0;
        position = display.textContent.indexOf(`${operation}`);
        secondNum = display.textContent.slice(position+1, display.textContent.length);
        console.log(firstNum, secondNum);
        display.textContent = operate(firstNum, operation, secondNum);
        firstNum = "";
        secondNum = "";
    }
}

function equals(){
    let position = 0;

    if (firstNum.length == 0){
        display.textContent = display.textContent;
    } else {
        position = display.textContent.indexOf(`${operator}`);
        secondNum = display.textContent.slice(position+1, display.textContent.length);
        display.textContent = operate(firstNum, operator, secondNum);
        firstNum = "";
        secondNum = "";
    }
}