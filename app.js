// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskListUl = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterBtn = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event listeners
loadEventListeners();

// Load All Evenet Listeners
function loadEventListeners(){
  // Add Task Event
  form.addEventListener('submit', addTask);
}

// Add Task Function
function addTask(e){
if (taskInput.value === "") {
  alert('Add a Task');
} 

// Create li element
const li = document.createElement('li');
// Add Class - materialize naming
li.className = "collection-item";
// Creat text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link = document.createElement('a');
// Add class name - 'secondary' =  side by side in materialize
link.className = 'delete-item secondary-content';
// Add Icon
link.innerHTML = '<i class="fa fa-remove"></i>'
// Append link to li
li.appendChild(link);

// Append li to ul
taskListUl.appendChild(li);

// Clear input
taskInput.value = '';


  e.preventDefault();
}
