// Function that gets the current time and displays it on the screen
function updateClock() {
  const now = new Date(); // Creates a Date object with the current date and time

  let hours = now.getHours();     // Gets the current hour (0–23)
  let minutes = now.getMinutes(); // Gets the current minutes (0–59)
  let seconds = now.getSeconds(); // Gets the current seconds (0–59)

  // Ensures each value has two digits by adding a leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Creates a formatted string like "HH:MM:SS"
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Updates the content of the element with id="reloj" to show the current time
  document.getElementById('clock').textContent = formattedTime;
}

// Calls updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Initial call to avoid 1-second delay before the first update
updateClock();