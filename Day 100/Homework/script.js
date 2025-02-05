const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => addTask(taskInput.value));

clearAllBtn.addEventListener('click', () => {
    localStorage.removeItem('tasks');
    loadTask();
});

function saveTasks() {
    let tasks = [];
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        tasks.push(document.querySelectorAll('li')[i].childNodes[0].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    if (task === "") return;

    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.textContent = task;
    btn.textContent = 'Remove';
    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";

    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    taskList.innerHTML = '';
    if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
            addTask(tasks[i]);
        }
    }
}