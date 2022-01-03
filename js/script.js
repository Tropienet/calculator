const display = document.querySelector("#display");
const numbersSelector = document.querySelectorAll(".number");
const operatorsSelector = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
let currentDisplayValue = 0;
let storedDisplayValue = 0;
let displayValueAfterOperation = 0;
let currentOperator = "none";

clear.addEventListener('click', () => {
    currentDisplayValue = 0;
    storedDisplayValue = 0;
    displayValueAfterOperation = 0;
    currentOperator = "none";
    display.textContent = 0;
})

Array.from(numbersSelector).forEach(number => {
    number.addEventListener('click', () => {
        if(parseInt(display.textContent)==0){
            display.textContent = number.textContent;
            storeDisplayValue();
        }else{
            display.textContent += number.textContent;
            storeDisplayValue();
        }
    });
});

Array.from(operatorsSelector).forEach(operator => {
    operator.addEventListener('click', () => {
        checkCurrentOperator(operator);
        
    })
})


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
    /*console.log(result);
  storedDisplayValue += result;
   display.textContent = storedDisplayValue; */
}

function storeDisplayValue(){
   // currentDisplayValue = parseInt(display.textContent);
}

function checkCurrentOperator(operator){
        if(currentOperator!="none"){
            currentOperator = operator.textContent;
            
            let currentVal = operate(operator.textContent,  storedDisplayValue, currentDisplayValue);
            storedDisplayValue = currentVal;
            display.textContent = storedDisplayValue;
            console.log(currentOperator);
            console.log(currentVal);
           // display.textContent = 0;
            
        }else if(currentOperator == "none"){
            storedDisplayValue = currentDisplayValue;
            display.textContent = 0;
            currentOperator = operator.textContent;
        }
        
      /*  if(currentOperator!="none"){
          displayValueAfterOperation = operate(currentOperator, storedDisplayValue, currentDisplayValue);
          display.textContent = 0;
            
        }else if(currentOperator=="none"){
            currentOperator = operator.textContent;
            storedDisplayValue += currentDisplayValue;
           display.textContent = 0;
        }*/

        
}