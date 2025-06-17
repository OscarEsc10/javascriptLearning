// Import prompt-sync to allow input in the terminal
const prompt = require("prompt-sync")();

// Ask the user for their age
let age = parseInt(prompt("Enter your age: "));

// Ask the user how many hours they sleep per day
let sleepHours = parseFloat(prompt("How many hours do you sleep per day? - "));

// Round the number of sleep hours using Math
let roundedSleep = Math.round(sleepHours);

// Check if the user is an adult AND sleeps enough
if (age > 18 && roundedSleep > 7) {
  console.log("You are an adult and you sleep enough. Good balance!");
} else if (age > 18 && roundedSleep <= 7) {
  console.log("You are an adult, but you should try to sleep more.");
} else if (age <= 18 && roundedSleep > 7) {
  console.log("You are not an adult yet, but your sleep habits are great!");
} else {
  console.log("You are young and not getting enough sleep. Try to rest more!");
}