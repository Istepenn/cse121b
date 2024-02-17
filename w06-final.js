document.addEventListener('DOMContentLoaded', function () {
    displayTasks();
});

function addTask() {
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDescriptionInput = document.getElementById('taskDescriptionInput');
    const taskDateInput = document.getElementById('taskDateInput');

    const task = {
        name: taskNameInput.value,
        description: taskDescriptionInput.value,
        date: taskDateInput.value,
        completed: false
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();
    clearInputs();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function (task, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.name} - ${task.description} - ${task.date}</span>
            <div class="task-actions">
                <button onclick="toggleTaskCompletion(${index})">${task.completed ? 'Undo' : 'Done'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];
    const newName = prompt('Enter new task name:', task.name);
    const newDescription = prompt('Enter new task description:', task.description);
    const newDate = prompt('Enter new task date:', task.date);
    if (newName !== null && newDescription !== null && newDate !== null) {
        task.name = newName;
        task.description = newDescription;
        task.date = newDate;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function toggleTaskCompletion(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function clearInputs() {
    document.getElementById('taskNameInput').value = '';
    document.getElementById('taskDescriptionInput').value = '';
    document.getElementById('taskDateInput').value = '';
}
