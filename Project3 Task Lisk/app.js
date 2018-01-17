// Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// function to load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTask);

    // Filter tasks event
    filter.addEventListener('keyup', filterTask);

    // DOM load event
    document.addEventListener('DOMContentLoaded', getTask)
}

/** Add tasks **/
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please add a task');
    }

    // Create li element
    const li = document.createElement('li');

    // Add class
    li.className = 'collection-item';

    // Create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create a new link element
    const link = document.createElement('a');

    //Add class
    link.className = 'delete-item secondary-content';

    //Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);



    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from Local Storage
function getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li');

        // Add class
        li.className = 'collection-item';

        // Create a text node and append to li
        li.appendChild(document.createTextNode(task));

        //Create a new link element
        const link = document.createElement('a');

        //Add class
        link.className = 'delete-item secondary-content';

        //Add icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
    });
}


function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('are you sure?')) {
                e.target.parentElement.parentElement.remove();
        }

        // Remove from ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(taskItem);
}

function clearTask() {
    //taskList.innerHTML = '';

    //Faster way to clear
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from Local storage
    clearTaskFromLocalStorage();
}

// clear from local storage function
function clearTaskFromLocalStorage(){
    localStorage.clear();
}

function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
    console.log(text);
}
