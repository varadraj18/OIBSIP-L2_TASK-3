function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  
