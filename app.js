// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskListUl = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterBtn = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event listeners
loadEventListeners();


 // Load All Event Listeners
function loadEventListeners(){
  // DOM load events
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskListUl.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task events
  filterBtn.addEventListener('keyup', filterTasks)
}

// GET Tasks from Local Storage
function getTasks() {
  let tasks;
  // check for pre existing tasks in local storage
  if(localStorage.getItem('tasks') === null) {
    tasks = [];//set to empty array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks') )
  }

  tasks.forEach(function (task) {
  // Create li element
  const li = document.createElement('li');
  // Add Class - materialize naming
  li.className = "collection-item";
  // Append user input to li
  li.appendChild(document.createTextNode(task));

  // Create new link element
  const link = document.createElement('a');
  // Add class name - 'secondary' =  side by side in materialize
  link.className = 'delete-item secondary-content';
  // Add Icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  
  // Append li to ul
  taskListUl.appendChild(li);
  });
}

// Add Task Function - user msg if empty
function addTask(e){
  if (taskInput.value === "") {
    alert('Add a Task');
  } 
  // Create li element
  const li = document.createElement('li');
  // Add Class - materialize naming
  li.className = "collection-item";
  // Append user input to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');
  // Add class name - 'secondary' =  side by side in materialize
  link.className = 'delete-item secondary-content';
  // Add Icon
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link to li
  li.appendChild(link);


  // Append li to ul
  taskListUl.appendChild(li);

  // Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input on submit
  taskInput.value = '';

  e.preventDefault();
}

// Store Task in Local Storage
function storeTaskInLocalStorage(task){
  let tasks;
  // check for pre existing tasks in local storage
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks) );
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    // i inside a inside li - remove the li
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
      e.target.parentElement.parentElement.style.transition = "0.2s";
    }
  }
}

// Clear Tasks - while loop may be faster
function clearTasks (){
  taskListUl.innerHTML = "";
}

// Filter Tasks
function filterTasks(e) {
  //input by user - lowercase helps for matching
  const text = e.target.value.toLowerCase();
  // select ALL list items by user
  document.querySelectorAll('.collection-item').forEach(
    function (task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
      task.style.backgroundColor = "#99d8ef";
    } else {
      task.style.display = "none";
    }
  });
}

