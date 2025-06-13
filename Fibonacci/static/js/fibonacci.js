function generatefibonacci() {
  // Get the number entered by the user
  const amount = parseInt(document.getElementById("amount").value);

  // Select the container where the results will be displayed
  const result = document.getElementById("result");

  // Clear any previous results
  result.innerHTML = "";

  // Validate that the input is a valid number greater than 0
  if (isNaN(amount) || amount < 1) {
    result.innerHTML = "<p>Please enter a valid number greater than 0.</p>";
    return; // Stop execution if the input is invalid
  }

  // Initialize the sequence with the first two Fibonacci numbers
  let fib = [0, 1];

  // Generate the rest of the Fibonacci sequence up to the desired amount
  for (let i = 2; i < amount; i++) {
    fib.push(fib[i - 1] + fib[i - 2]); // Add the two previous numbers and push the result
  }

  // Slice the array in case the user requested fewer than 2 numbers
  const sequence = fib.slice(0, amount);

  // Iterate over each number in the sequence and display it on the page
  sequence.forEach((num, index) => {
    const item = document.createElement("div");      // Create a new div element
    item.classList.add("fibonacci-item");            // Add a class for styling
    item.textContent = num;                          // Set the number as the text content
    result.appendChild(item);                        // Append the item to the result container
  });
}
