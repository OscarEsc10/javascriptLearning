// Import prompt-sync to allow user input in the terminal
const prompt = require("prompt-sync")();

// Ask the user to enter a decimal number
let input = prompt("Enter a decimal number: ");

// Try converting the input into a floating point number
let decimalNumber = parseFloat(input);

// Check if the input is a valid number
if (isNaN(decimalNumber)) {
  console.log("Invalid input. Please enter a valid decimal number.");
} else {
  // Round the number down using Math.floor()
  let roundedDown = Math.floor(decimalNumber);

  // Convert the rounded number to an integer using Number.parseInt()
  let integerResult = Number.parseInt(roundedDown);

  // Example use of assignment operator: assign value to a new variable
  let finalValue = 0;
  finalValue += integerResult; // Using += as an assignment operator

  // Display the results
  console.log(`Original decimal number: ${decimalNumber}`);
  console.log(`Rounded down (using Math.floor): ${roundedDown}`);
  console.log(`Converted to integer (using Number.parseInt): ${integerResult}`);
}
