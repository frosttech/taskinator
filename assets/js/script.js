
// assign objects to variables
var buttonEl = document.querySelector("#save-task");
var tasksToDoEL = document.querySelector("#tasks-to-do");


// callback function for creating new list element
var createTaskHandler = function() {
    // creates and formats list object
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    // appends new list object to task list
    tasksToDoEL.appendChild(listItemEl);
}


// add task when button is clicked
buttonEl.addEventListener("click", createTaskHandler);