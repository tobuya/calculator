//First we listen to all keypresses and then determine the type of key pressed
//We then use the data-action attribute to determine the key that is pressed

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
            if(!action) {
                if(displayedNum === "0"){
                    display.textContent = keyContent;
                }else {
                    display.textContent = displayedNum + keyContent;
                }
            }
            if(
                action === "add" ||
                action === "subtract" ||
                action === "multiply" ||
                action === "divide"
            ) {
                console.log("operator key!");
            }
            if(action === "decimal") {
                display.textContent = displayedNum + ".";
            }
            if(action === "clear") {
                console.log("clear key!");
            }
            if(action === "delete") {
                console.log("delete key!");
            }
            if(action === "calculate") {
                console.log("calculate key!");
            }
        }
    });
});
