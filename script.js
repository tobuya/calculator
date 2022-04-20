const resultArea = document.querySelector("#top");
const display = document.querySelector(".display");
const toClear = document.querySelector(".left");
const toDelete = document.querySelector(".right");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const divideBtn = document.querySelector(".divide");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const multipleBtn = document.querySelector(".multiple");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const minusBtn = document.querySelector(".minus");
const periodBtn = document.querySelector(".period");
const zeroBtn = document.querySelector(".zero");
const equalBtn = document.querySelector(".equal");
const plusBtn = document.querySelector(".plus");


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function returnZero() {
    const zero = `${numbers[0]}`;
    return Number(zero);
}
zeroBtn.value = returnZero();

function returnOne() {
    const  one = `${numbers[1]}`;
    return Number(one);
}
oneBtn.value = returnOne();

function returnTwo() {
    const two = `${numbers[2]}`;
    return Number(two);
}
twoBtn.value = returnTwo();

function returnThree() {
    const three = `${numbers[3]}`;
    return Number(three);
}
threeBtn.value = returnThree();

function returnFour() {
    const four = `${numbers[4]}`;
    return Number(four);
}
fourBtn.value = returnFour();

function returnFive() {
    const five = `${numbers[5]}`;
    return Number(five);
}
fiveBtn.value = returnFive();

function returnSix() {
    const six = `${numbers[6]}`;
    return Number(six);
}
sixBtn.value = returnSix();

function returnSeven() {
    const seven = `${numbers[7]}`;
    return Number(seven);
}
sevenBtn.value = returnSeven();

function returnEight() {
    const eight = `${numbers[8]}`;
    return Number(eight);
}
eightBtn.value = returnEight();

function returnNine() {
    const nine = `${numbers[9]}`;
    return Number(nine);
}
nineBtn.value = returnNine();


oneBtn.addEventListener("click", () => {})

console.log(typeof(returnOne()));