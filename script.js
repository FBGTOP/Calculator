let firstNum = "";
let secondNum = "";
let operator = "";
let display = document.querySelector(".display");
let secondaryDisp = document.getElementById("previousCalc");
display.textContent = "0";
secondaryDisp.textContent = "";

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

function backspace(){
    if (display.textContent.length == 1){
        display.textContent = 0;
    } else {
        display.textContent = display.textContent.slice(0,-1);
        firstNum = "";
    }
}

function resetToZero(){
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = "0";
    secondaryDisp.textContent = "";
}
