// call form and list variables
const form = document.getElementById("taskForm")
const list = document.getElementById("taskList")

// variable to get tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

// function to save to local storage
function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function that displays tasks
function showTasks(filter = "all") {
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        if (filter === "completed" && !task.done) return;
        if (filter === "pending" && task.done) return;

        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" ${task.done? 'checked': ""} onchange = "toggleTask(${index})">
        <span class ="${task.done? 'completed': ""} ${task.priority.toLowerCase()}"> ${task.name} ${task.priority} -- ${task.date}</span>
        <button onclick ="delTask(${index})">X</button>
        `;
        list.appendChild(li);
    });
}


form.addEventListener("submit", e => {
    e.preventDefault()
    let name = document.getElementById("taskName").value.trim();
    let priority = document.getElementById("taskPriority").value;
    let date = document.getElementById("taskDate").value;
    let done = false;
    tasks.push({ name, priority, date, done });
    save();
    showTasks();
    form.reset();

});

// function to mark as completed
function toggleTask(i) {
  tasks[i].done = !tasks[i].done
  save()
  showTasks()
}

// function to delete task
function delTask(i) {
  tasks.splice(i, 1)
  save()
  showTasks()
}

showTasks();