// 🔍 Part 1 error
let userName = "Moroni"; // Change const to let
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Use the Date() object
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error
let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) { // Change 'in' to 'of'
        sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
    }
    return sum;
}
