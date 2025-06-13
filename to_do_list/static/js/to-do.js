function addtask() {
  // Get the input element where the user types the task
  const input = document.getElementById("taskInput");

  // Get the trimmed text value (removing leading/trailing spaces)
  const text = input.value.trim();

  // If the input is empty, do nothing
  if (text === "") return;

  // Get the list container where tasks will be displayed
  const list = document.getElementById("addtask");

  // Create a new <li> element for the task
  const li = document.createElement("li");

  // Set the task text as the content of the <li>
  li.textContent = text;

  // Add event listener to toggle the 'completed' style on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create a button to delete the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  // Append the delete button to the <li>
  li.appendChild(deleteBtn);

  // Add the task <li> to the task list
  list.appendChild(li);

  // Clear the input field after adding the task
  input.value = "";
}