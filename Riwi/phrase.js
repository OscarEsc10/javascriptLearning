// Import prompt-sync for user input in terminal
const prompt = require("prompt-sync")();

// Ask the user to enter a phrase
let phrase = prompt("Enter a phrase: ");

// Ask the user to choose an operation
let option = prompt(
  "\nChoose an operation:\n" +
  "1. Convert to UPPERCASE\n" +
  "2. Replace spaces with hyphens\n" +
  "3. Count number of characters\n" +
  "4. Convert to lowercase\n" +
  "\nEnter your option (1-4): "
);

// Convert the input to an integer using Number.parseInt
let choice = Number.parseInt(option);

// Initialize a variable to store the result (assignment operator used)
let result = "";

// Switch statement to handle different string operations
switch (choice) {
  case 1:
    // Convert phrase to uppercase
    result = phrase.toUpperCase(); // assignment operator used here
    break;

  case 2:
    // Replace all spaces with hyphens using replace and regex
    result = phrase.replace(/ /g, "-");
    break;

  case 3:
    // Count characters
    let count = phrase.length;
    result = `The phrase has ${count} characters.`;
    break;

  case 4:
    // Convert phrase to lowercase
    result = phrase.toLowerCase();
    break;

  default:
    result = "❌ Invalid option selected.";
    break;
}

// Display the result in the console
console.log("✅ Result:", result);
