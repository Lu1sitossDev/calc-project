let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let lastResult = "";

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(operator,num1,num2){
    switch(operator){
        case "+":
            return add(num1,num2);

        case "-":
            return subtract(num1,num2);

        case "*":
            return multiply(num1,num2);

        case "/":
            return divide(num1,num2);
    }

}

const btn = document.querySelectorAll('.btn');
let btnArray = Array.from(btn)
              .map((button) => button.textContent = button.id);

const display = document.querySelector('.display');
const line1 = document.querySelector('.l1');
const line2 = document.querySelector('.l2');
line1.textContent = "a";
line2.textContent = "b"

const containerNum = document.querySelector('.container-num');
containerNum.addEventListener('click',(e) => {
    id = e.target.id;
    
    if(operator === ""){
        firstNum += id;
    }else{
        
        secondNum += id;
    }
    
    line1.textContent = `${firstNum} ${operator} ${secondNum}`;
    line2.textContent = `${result}`;
    if(result != ""){
        lastResult = result;
        result = "";
        firstNum = lastResult;
        secondNum = "";
    }
    
    
});

const containerOperators = document.querySelector('.container-operators');
containerOperators.addEventListener('click', (e) => {
    id = e.target.id;
    switch(id){
        case "+":
            operator = id;
            break;

        case "-":
            operator = id;
            break;

        case "*":
            operator = id;
            break;

        case "/":
            operator = id;
            break;
    }

    line1.textContent = `${firstNum} ${operator} ${secondNum}`;
    line2.textContent = `${result}`;

    if(result != ""){
        lastResult = result;
        result = "";
        firstNum = lastResult;
        secondNum = "";
        operator = id;
    }
    
    
})

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    result = operate(operator,+firstNum,+secondNum)
    line1.textContent = `${firstNum} ${operator} ${secondNum}`
});

const containerFunc = document.querySelector('.container-func');
containerFunc.addEventListener('click', (e) => {
    id = e.target.id;
    switch(id){
        case "AC":
            operator = "";
            firstNum = "";
            secondNum = "";
            result = "";
            lastResult = "";
            break;
    }
    if(id == "C"){
        if(secondNum == ""){
           firstNum = firstNum.slice(firstNum.lenght-2, firstNum.length-1)
        }else{
            secondNum = secondNum.slice(secondNum.lenght-2, secondNum.length-1)
        }
    }
    line1.textContent = `${firstNum} ${operator} ${secondNum}`
    line2.textContent = `${result}`
})


