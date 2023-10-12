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
    }else if (sign == "/"){
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
        operator = "";
    }
}

function resetToZero(){
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = "0";
    secondaryDisp.textContent = "";
}

function updateDisplay(button){

    if (firstNum.length > 0 && operator.length > 0 && secondaryDisp.textContent.length == 0){
        secondaryDisp.textContent = display.textContent;
        display.textContent = '';
        inputCheck(button);       
    } else {
        inputCheck(button);
    }

    
}

function inputCheck(button){
    if (button == "." && display.textContent.indexOf('.') >= 0){
        display.textContent;
    } else if (button == "."){
        display.textContent += button;
    }  else if (display.textContent == "0"){
        display.textContent = '';
        display.textContent += button;
    } else {
        display.textContent += button;
    }
}

function calculate(operation){
    
    if(secondaryDisp.textContent.length > 0 && operator.length > 0){
        secondNum = display.textContent;
        display.textContent = operate(firstNum, operator, secondNum);
        firstNum = display.textContent;
        secondNum ='';
        display.textContent += operation;
        operator = operation;
        secondaryDisp.textContent = '';
    }
    
    if (operator.length == 1){
        display.textContent = display.textContent.replace(`${operator}`,`${operation}`);
        operator = operation;
    } else {
        firstNum = display.textContent;
        operator = operation;
        display.textContent += operation;
    }

}

function equals(){
   
    if(secondaryDisp.textContent.length > 0 && operator.length > 0){
        secondNum = display.textContent;
        display.textContent = operate(firstNum, operator, secondNum);
        secondaryDisp.textContent = '';
        operator = '';
        secondNum ='';
        firstNum = display.textContent;
    } 
    
}
