const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage on page load
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    addTaskToDOM(task.text, task.completed);
  });
};

// Function to add a task
const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  addTaskToDOM(taskText, false);
  saveTaskToLocalStorage(taskText, false);

  // Clear input field
  taskInput.value = "";
};

// Function to add task to the DOM
const addTaskToDOM = (taskText, isCompleted) => {
  // Create task list item
  const li = document.createElement("li");
  li.textContent = taskText;

  if (isCompleted) {
    li.classList.add("completed");
  }

  // Toggle completed mark
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTaskInLocalStorage(taskText, li.classList.contains("completed"));
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    removeTaskFromLocalStorage(taskText);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
};

// Function to save a task to local storage
const saveTaskToLocalStorage = (taskText, isCompleted) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push({ text: taskText, completed: isCompleted });
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

// Function to update a task's completed status in local storage
const updateTaskInLocalStorage = (taskText, isCompleted) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.map(task =>
    task.text === taskText ? { ...task, completed: isCompleted } : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

// Function to remove a task from local storage
const removeTaskFromLocalStorage = (taskText) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.filter(task => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

addTaskBtn.addEventListener("click", addTask);