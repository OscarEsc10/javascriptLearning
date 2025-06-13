// Initialize the counter variable to 0
let accountancy = 0;

/**
 * This function increases the counter by 1
 * and updates the content of the HTML element
 * with the current counter value.
 */
function update() {
  accountancy++; // Increment the counter by 1
  document.getElementById('accountancy').textContent = accountancy; // Display the updated value
}

// Start the interval: calls actualizarContador every 1000 milliseconds (1 second)
setInterval(update, 1000);