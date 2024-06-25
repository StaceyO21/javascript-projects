// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
const input = require("readline-sync");
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
numerator = Number(input.question("Enter the numerator: "));
denominator = Number(input.question("Enter the denominator: "))
function divide (numerator, denominator){
    if (denominator === 0) {
        throw Error("Attempted to divide by zero.");
    }
   return numerator / denominator;
}
console.log(divide(numerator, denominator));