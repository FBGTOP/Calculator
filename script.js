let firstNum = 0;
let secondNum = 0;
let operator = "";

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