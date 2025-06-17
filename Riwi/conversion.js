const prompt = require("prompt-sync")(); // Importing prompt-sync for user input

// Ask the user to enter a number
let number = parseFloat(prompt("Enter a number to see its multiplication table: "));

// Check if the input is a valid number
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  console.log(`Multiplication table for ${number}:\n`);

  // Loop from 1 to 10
  for (let i = 1; i <= 10; i++) {
    // Calculate the product using Math (rounding here for demonstration)
    let product = Math.round(number * i);

    // Convert the result to a string
    let resultString = product.toString();

    // Display the result in the console
    console.log(`${number} x ${i} = ${resultString}`);
  }
}