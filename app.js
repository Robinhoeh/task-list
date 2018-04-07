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
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskListUl.addEventListener('click', removeTask);
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

  // Clear input on submit
  taskInput.  value = '';

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    // i inside a inside li - remove the li
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}