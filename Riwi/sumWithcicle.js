// Import prompt-sync to receive input in the terminal
const prompt = require("prompt-sync")();

// Ask the user to enter a number
let input = prompt("Enter a number: ");
let limit = parseInt(input);

// Check if input is valid
if (isNaN(limit) || limit < 1) {
  console.log("Invalid input. Please enter a number greater than 0.");
} else {
  let sum = 0;

  // Loop from 1 up to the entered number
  for (let i = 1; i <= limit; i++) {
    // Check if the number is odd using logical operator (%)
    if (i % 2 !== 0) {
      // Optional: use Math.pow for demonstration (e.g., square the odd number)
      let value = Math.pow(i, 1); // Math.pow(i, 1) is just i, here to show Math usage
      sum += value; // Add odd number to the sum
    }
  }

  // Show the result
  console.log(`The sum of all odd numbers up to ${limit} is: ${sum}`);
}
