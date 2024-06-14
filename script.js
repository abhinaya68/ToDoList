function addTask() {
    var input = document.getElementById("taskInput").value;
    var dueDate = document.getElementById("dueDate").value;
    var priority = document.getElementById("priority").value;
    
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createTextNode(input + " - Due: " + dueDate + " - Priority: " + priority);
    li.appendChild(taskText);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);

    var completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = function () {
        li.style.textDecoration = "line-through";
    };
    li.appendChild(completeBtn);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";
}
