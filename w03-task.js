/* LESSON 3 - Programming Tasks */

/* Function Declaration - Addition Feature */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration - Add Numbers Feature */
function addNumbers() {
    const num1 = parseFloat(document.getElementById("add1").value);
    const num2 = parseFloat(document.getElementById("add2").value);
    document.getElementById("sum").value = add(num1, num2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtraction Feature */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const num1 = parseFloat(document.getElementById("subtract1").value);
    const num2 = parseFloat(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(num1, num2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Functions - Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(num1, num2);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Function Declaration - Division Feature */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Selection Structures - Get Total Due Feature */
document.getElementById("getTotal").addEventListener("click", function() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;
    const discount = isMember ? 0.2 : 0;
    const total = (subtotal - (subtotal * discount)).toFixed(2);
    document.getElementById("total").innerText = `$ ${total}`;
});

/* Array Methods - Functional Programming Feature */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

document.getElementById("array").innerText = numbersArray.join(", ");

const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").innerText = oddNumbers.join(", ");

const evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").innerText = evenNumbers.join(", ");

const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").innerText = sumOfArray;

const multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").innerText = multipliedArray.join(", ");

const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;
