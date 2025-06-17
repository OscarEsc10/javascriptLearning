const prompt = require("prompt-sync")(); // Importing prompt-sync to allow user input in the terminal

// Display a menu and ask the user to select a math operation
let operation = prompt(
  "Select a math operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter your choice (1-4): "
);

// Ask the user to input the first number
let num1 = parseInt(prompt("Enter the first number: "));

// Ask the user to input the second number
let num2 = parseInt(prompt("Enter the second number: "));

// Declare a variable to store the result
let result;

// Use a switch statement to perform the selected operation
switch (operation) {
  case "1": // Addition
    result = num1 + num2;
    break;
  case "2": // Subtraction
    result = num1 - num2;
    break;
  case "3": // Multiplication
    result = num1 * num2;
    break;
  case "4": // Division
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Error: Cannot divide by zero.");
      result = null; // Set result to null if division is invalid
    }
    break;
  default: // Invalid option
    console.log("Invalid operation selected.");
    result = null;
}

// If the result is valid, round and display it
if (result !== null) {
  let rounded = Math.round(result);         // Round the result using Math.round()
  let decimal = Number.parseFloat(rounded); // Convert the rounded result to a float (optional in this case)
  console.log("Result:", decimal);          // Display the result in the console
}