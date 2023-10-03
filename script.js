let firstNum = "";
let secondNum = "";
let operator = "";
let display = document.querySelector(".display");
display.textContent = "0";

function operate(first, sign, second){
    let result = 0;

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

function updateDisplay(item){
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