// Import prompt-sync for terminal input
const prompt = require("prompt-sync")();

// Ask the user to enter a day of the week
let inputDay = prompt("Enter a day of the week: ");

// Normalize the input: convert to lowercase and trim spaces
let day = inputDay.trim().toLowerCase();

let message = "";

// Use a switch case to evaluate the day
switch (true) {
  // Weekdays: Monday to Friday
  case (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"):
    // Use substring to extract first 3 letters and slice to format message
    let dayShortWeek = day.substring(0, 3).toUpperCase(); // "mon"
    message = `${dayShortWeek} is a working day.`;
    break;

  // Weekends: Saturday and Sunday
  case (day === "saturday" || day === "sunday"):
    let dayShortWeekend = day.slice(0, 3).toUpperCase(); // "sat"
    message = `${dayShortWeekend} is a rest day.`;
    break;

  // Invalid input
  default:
    message = "Invalid day entered. Please try again.";
}

// Output the result
console.log(message);