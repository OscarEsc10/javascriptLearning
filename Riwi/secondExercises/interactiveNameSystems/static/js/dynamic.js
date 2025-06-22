// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function() {
  // Prompt the user to enter their name
  let name = prompt("What is your name?");

  // Prompt the user to enter their age
  let ageInput = prompt("How old are you?");

  // Convert the age input (string) to an integer
  let age = parseInt(ageInput);

  // Check if the input is a valid number
  if (!isNaN(age)) {
    // If the age is less than 18
    if (age < 18) {
      alert(`Hello ${name}, keep learning and never stop growing!`);
    } else {
      // If the age is 18 or more
      alert(`Hello ${name}, it's the perfect time to explore new opportunities!`);
    }
  } else {
    // If the input is not a valid number
    alert("Please enter a valid age in numeric format.");
  }

  // Add an event listener to the form with ID "form" for when it's submitted
  document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the value of the name input field and remove extra spaces
    let nameForm = document.getElementById("name").value.trim();

    // Get the value of the age input field and remove extra spaces
    let ageForm = document.getElementById("age").value.trim();

    // Reference to the element where we will display the result message
    let message = document.getElementById("message");

    // Check if the input is not empty and is a number
    if (!isNaN(ageForm) && ageForm !== "") {
      // Convert the age to a number
      ageForm = Number(ageForm);

      // Display a custom message based on age
      if (ageForm < 18) {
        message.textContent = `Hello ${nameForm}, keep learning and never stop growing!`;
        message.style.color = "black";
      } else {
        message.textContent = `Hello ${nameForm}, it's the perfect time to explore new opportunities!`;
        message.style.color = "black";
      }
    } else {
      // Show an error message if the age is invalid
      message.textContent = "Please enter a valid age in numeric format.";
      message.style.color = "black";
    }
  });
})();