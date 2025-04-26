const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");
const dateInput = document.getElementById("date-input");
const taskList = document.getElementById("task-list");
const clearTasksButton = document.getElementById("clear-tasks");
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

// Function to create a new task
function createTask(taskText, priority, dueDate) {
  const li = document.createElement("li");
  li.classList.add("task");

  const span = document.createElement("span");
  span.textContent = `${taskText} (Due: ${dueDate})`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-btn");

  // Set priority color
  if (priority === "low") {
    li.classList.add("priority-low");
  } else if (priority === "medium") {
    li.classList.add("priority-medium");
  } else if (priority === "high") {
    li.classList.add("priority-high");
  }

  // Mark task done when clicked
  span.addEventListener("click", function() {
    li.classList.toggle("done");

    if (li.classList.contains("done")) {
      // Flash green
      li.classList.add("flash-green");

      // Show celebration
      alert("🎉 Good job completing your task!");

      li.addEventListener('animationend', function removeFlash() {
        li.classList.remove('flash-green');
        li.removeEventListener('animationend', removeFlash);
      }, { once: true });
    }
  });

  // Delete task
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

// When clicking "Add"
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  const priority = priorityInput.value;
  const dueDate = dateInput.value || "No due date";
  if (taskText !== "") {
    createTask(taskText, priority, dueDate);
    taskInput.value = "";
    dateInput.value = "";
    taskInput.focus();
  }
});

// Also allow pressing Enter key
taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

// When clicking "Clear All"
clearTasksButton.addEventListener("click", function() {
  const confirmClear = confirm("Are you sure you want to clear all tasks?");
  if (confirmClear) {
    taskList.innerHTML = "";
  }
});

// Dark Mode Toggle
toggleDarkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".todo-container").classList.toggle("dark-mode");
});
