
// assign objects to variables
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// callback function for creating new list element
var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // creates and formats list object
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // creates a div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // add HTML contents to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl); 

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// add task when button is clicked
formEl.addEventListener("submit", createTaskHandler);