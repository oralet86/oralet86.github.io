let firstOperand = ""
let secondOperand = ""
let operatorValue = ""

function isInCalculation() {
    return (operatorValue !== "");
}

const display = document.querySelector(".display");

function updateDisplay() {
    firstOperand = cleanOperand(firstOperand);
    secondOperand = cleanOperand(secondOperand);
    let displayValue = `${firstOperand}${operatorValue}${secondOperand}`;
    displayValue = (displayValue.length > 13) ? displayValue.slice(displayValue.length-13) : displayValue;
    display.innerText = displayValue;
}

function cleanOperand(operand) {
    let oprnd = Array.from(operand).length;
    while(oprnd[0] === "0" && oprnd.length != 1 && oprnd[1] != ".") {
            operand = operand.slice(1);
            oprnd = Array.from(operand).length;
    }
    return operand;
}

const operands = document.querySelectorAll(".operand");

operands.forEach(operand => {
    operand.addEventListener("click", (e) => {
        const clickedOperandValue = e.target.innerText;
        if(!isInCalculation()) {
            firstOperand += clickedOperandValue;
        }
        else {
            secondOperand += clickedOperandValue;
        }
        updateDisplay();
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if(!isInCalculation()) {
            operatorValue = e.target.innerText;
        }
        else {
            calculateResult();
        }
        updateDisplay();
    })
});

const equals = document.querySelector(".equals")

equals.addEventListener("click", () => {
    const res = calculateResult();
    if (res === 0) {
        updateDisplay();
    }
    else if (res === 1){
        display.innerText = "trololololo";
        clearValues();
    }
    else if (res === 2) {
        display.innerText = "Invalid";
        clearValues();
    }
});

function calculateResult() {
    firstOperand = Number(firstOperand);
    try {
        secondOperand = !secondOperand.includes("(") ? Number(secondOperand) : Number(secondOperand.slice(1, -1));
    }
    catch {
        return 2;
    }
    switch (operatorValue) {
        case "%":
            firstOperand %= secondOperand;
            break;
        
        case "/":
            if(secondOperand === 0) {
                return 1;
            }
            firstOperand /= secondOperand;
            break;

        case "x":
            firstOperand *= secondOperand;
            break;

        case "-":
            firstOperand -= secondOperand;
            break;

        case "+":
            firstOperand += secondOperand;
            break;

        default:
            break;
    }
    if (isNaN(firstOperand)) {
        return 2;
    }
    firstOperand = cleanOperand(String(firstOperand));
    if(firstOperand.length > 10) {
        firstOperand = firstOperand.slice(0,10);
    }
    secondOperand = "";
    operatorValue = "";
    return 0;
}

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    clearValues();
    updateDisplay();
});

function clearValues() {
    firstOperand = "";
    secondOperand = "";
    operatorValue = "";    
}

const sign = document.querySelector("#sign");

sign.addEventListener("click", () => {
    if(!isInCalculation()) {
        if(!firstOperand.includes("-")) {
            firstOperand = "-" + firstOperand;
        }
        else {
            firstOperand = firstOperand.slice(1);
            console.log(firstOperand);
        }
    }
    else {
        if(!secondOperand.includes("-")) {
            secondOperand = "(-" + secondOperand + ")";
        }
        else {
            secondOperand = secondOperand.slice(2, -1);
        }
    }
    updateDisplay();
})

const dot = document.querySelector("#dot");

dot.addEventListener("click", () => {
    if(!isInCalculation()) {
        if(!firstOperand.includes(".")) {
            firstOperand += ".";
        }
    }
    else {
        if(!secondOperand.includes(".")) {
            secondOperand += ".";
        }
    }
    updateDisplay();
});