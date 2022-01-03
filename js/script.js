const display = document.querySelector("#display");
const numbersSelector = document.querySelectorAll(".number");



Array.from(numbersSelector).forEach(number => {
    number.addEventListener('click', () => {
       display.textContent += number.textContent;
    });
});


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(operator,a,b){
    let result = 0;
    switch(operator){
        case "+": 
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default: 
            console.log("Error");    
    }
    
    return result;
}