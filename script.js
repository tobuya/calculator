const calculator = document.querySelector("#container");
const keys = calculator.querySelectorAll(".keys");
const display = document.querySelector(".display");

Array.from(keys).forEach(key => {
    key.addEventListener("click", e => {
        if(e.target.matches("button")) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            if(!action) {
                if(displayedNum === "0" || previousKeyType === "operator" || previousKeyType === "calculate") {
                    display.textContent = keyContent;
                }else {
                    display.textContent = displayedNum + keyContent;
                }
                calculator.dataset.previousKeyType = "number";
            }
            if(
                action === "add" ||
                action === "subtract" ||
                action === "multiply" ||
                action === "divide"
            ) {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;

                if(firstValue &&
                     operator && 
                     previousKeyType !== "operator" && 
                     previousKeyType !== "calculate" &&
                     previousKeyType !== "delete") {
                         const calcValue = calculate(firstValue, operator, secondValue);
                         display.textContent = calcValue;
                         calculator.dataset.firstValue = calcValue;
                }else {
                    calculator.dataset.firstValue = displayedNum;
                }

                key.classList.add("is-depressed");
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.operator = action;
            }
            if(action === "decimal") {
                if(!displayedNum.includes(".")) {
                    display.textContent = displayedNum + ".";
                }
                if(previousKeyType === "operator" || previousKeyType === "calculate"){
                    display.textContent = "0.";
                }
                calculator.dataset.previousKeyType = "decimal";
            }
            if(action === "clear") {
                display.textContent = 0;
                if(display.textContent === "0") {
                    calculator.dataset.firstValue = "";
                    calculator.dataset.modValue = "";
                    calculator.dataset.operator = "";
                    calculator.dataset.previousKeyType = "";
                }
                calculator.dataset.previousKeyType = "clear";
            }
            if(action === "delete") {
                let displayValue = Array.from(displayedNum);
                let returnValue = displayValue.pop();
                display.textContent = displayValue.join("");

                calculator.dataset.previousKeyType = "delete";
            }
            if(action === "calculate") {
                let firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                let secondValue = displayedNum;

              if(firstValue) {
                 if(previousKeyType === "calculate") {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                    }
                 if(displayedNum.includes(".")){
                     display.textContent = calculate(firstValue, operator, secondValue).toFixed(3);
                 } else {
                     display.textContent = calculate(firstValue, operator, secondValue);
                 }  
                }
                calculator.dataset.modValue = secondValue;
                calculator.dataset.previousKeyType = "calculate";
            }
        }
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove("is-depressed"));
    });
});

const calculate = (n1, operator, n2) => {
    let result = "";
    if(operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
    }else if(operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
    }else if(operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
    }else if(operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}
