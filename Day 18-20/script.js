const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const addTask = () => {
    const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // create task list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // completed mark
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // delete button
  const deletBtn = document.createElement("button");
  deletBtn.textContent = "Delete";
  deletBtn.classList.add("delete-btn");

  deletBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(deletBtn);
  taskList.appendChild(li);

  // clear input field
  taskInput.value = "";

}

addTaskBtn.addEventListener("click", addTask);


