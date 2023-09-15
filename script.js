
let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");

// we are Creating array to store the tasks
let tasks = [];

//function to add a task to the list
function addTask() {
  let task = todoInput.value;

  if (task) {

    tasks.push(task);

    todoInput.value = "";

    // Update the list display
    updateList();
  }
}

//function to update the list display
function updateList() {
  todoList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    // Created a new list item element
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Created a new span element to hold the task text
    let span = document.createElement("span");
    span.textContent = tasks[i];

    // Created a new button element to delete the task
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", function() {
      // it will remove task from the array
      tasks.splice(i, 1);
      // Update the list display
      updateList();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });

    todoList.appendChild(li);
  }
}

addButton.addEventListener("click", addTask);