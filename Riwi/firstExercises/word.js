// Import prompt-sync to allow user input from the terminal
const prompt = require("prompt-sync")();

// Ask the user to enter a word
let word = prompt("Enter a word: ");

// Initialize a variable to store the new formatted word
let result = "";

// Loop through each character of the word
for (let i = 0; i < word.length; i++) {
  // If the index is even, make the character uppercase
  // If the index is odd, make it lowercase
  if (i % 2 === 0) {
    result += word[i].toUpperCase(); // Assignment operator += and toUpperCase
  } else {
    result += word[i].toLowerCase(); // Assignment operator += and toLowerCase
  }
}

// Display the final result
console.log("Alternating case result:", result);