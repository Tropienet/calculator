const display = document.querySelector("#display");
const numbersSelector = document.querySelectorAll(".number");
const operatorsSelector = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
let currentDisplayValue = 0;
let storedDisplayValue = 0;
let displayValueAfterOperation = 0;
let currentOperator = "none";
let check = 0;
let check2 = 0;

equals.addEventListener('click', () => {
    finishCalculation();
})

clear.addEventListener('click', () => {
    currentDisplayValue = 0;
    storedDisplayValue = 0;
    displayValueAfterOperation = 0;
    currentOperator = "none";
    display.textContent = 0;
    check = 0;
})

Array.from(numbersSelector).forEach(number => {
    number.addEventListener('click', () => {
        if(check==0){
            display.textContent = number.textContent;
            check= 1;
            updateCurrentDisplayValue();
        }else{
            display.textContent += number.textContent;
           updateCurrentDisplayValue();
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
    
    storedDisplayValue = result;
    console.log(`${storedDisplayValue} is this in operate`);
    display.textContent =storedDisplayValue;
}

function updateCurrentDisplayValue(){
    currentDisplayValue = parseInt(display.textContent);
    console.log(currentDisplayValue);
}



function checkCurrentOperator(operator){
  if(currentOperator=="none"){
    storedDisplayValue = currentDisplayValue;
    console.log(`${storedDisplayValue} is this in checkCurrentoperator`);
    currentOperator = operator.textContent;
    check = 0;
  }else if(currentOperator!="none"){
     
        console.log(`${storedDisplayValue} is this in checkCurrentoperatornone`);
        console.log(`${currentOperator} is`);
      operate(currentOperator, storedDisplayValue, currentDisplayValue);
      check = 0;
      currentOperator = operator.textContent;
      console.log(`${currentOperator} is`);

      

  }
            
        

}

function finishCalculation(){
    operate(currentOperator, storedDisplayValue, currentDisplayValue);
    check = 0;
    currentOperator = "none";
    display.textContent = storedDisplayValue;
}