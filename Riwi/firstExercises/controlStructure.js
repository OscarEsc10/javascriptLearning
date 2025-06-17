const prompt = require('prompt-sync')();
// Get user input (only works in browsers)
let firstInput = prompt("Enter the first number: ");
let secondInput = prompt("Enter the second number: ");

// Convert to numbers
let num1 = parseFloat(firstInput);
let num2 = parseFloat(secondInput);

// Check if num1 is greater than num2
if (num1 > num2) {
  let result = num1 - num2;
  console.log("Result of subtraction:", result);

  // Use string method to check if positive or negative
  let resultStr = result.toString();
  if (resultStr.startsWith("-")) {
    console.log("The result is negative.");
  } else {
    console.log("The result is positive.");
  }
} else {
  console.log("The first number is not greater than the second.");
}
