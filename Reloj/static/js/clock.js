// Function that gets the current time and displays it on the screen
function updateClock() {
  const now = new Date(); // Creates a Date object with the current date and time

  let hours = now.getHours();     // Gets the current hour (0–23)
  let minutes = now.getMinutes(); // Gets the current minutes (0–59)
  let seconds = now.getSeconds(); // Gets the current seconds (0–59)
  let ampm = hours >= 12 ? 'PM' : 'AM'; // Determines if it's AM or PM

  // Ensures each value has two digits by adding a leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Creates a formatted string like "HH:MM:SS"
  const formattedTime = `${hours}:${minutes}:${seconds}:${ampm}`; 

  // Updates the content of the element with id="reloj" to show the current time
  document.getElementById('clock').textContent = formattedTime;
}

// Calls updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Initial call to avoid 1-second delay before the first update
updateClock();