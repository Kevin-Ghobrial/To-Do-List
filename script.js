const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        addTask();
    }
});
