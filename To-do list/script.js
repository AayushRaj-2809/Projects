// script.js
 
// Selectors
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const clearCompletedBtn = document.getElementById('clear-completed');

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    newTaskInput.value = '';
  }
});

// Add task to the list
function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;
  taskList.appendChild(li);

  // Mark task as complete
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(li);
  });
}

// Clear all completed tasks
clearCompletedBtn.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('li.completed');
  completedTasks.forEach(task => task.remove());
});




// 1.Selectors
// newTaskInput: Refers to the input box where the user types a new task.
// addTaskBtn: Refers to the "Add Task" button.
// taskList: Refers to the <ul> where tasks will be displayed.
// clearCompletedBtn: Refers to the "Clear Completed" button.


// 2.Adding a new task.
// Adds a click event listener to the "Add Task" button.
// When clicked:
// newTaskInput.value.trim() retrieves the text from the input box, removing any extra spaces.
// If the text isn't empty, it calls the addTask(taskText) function to add the task.
// Resets the input box (newTaskInput.value = '').


// 3.Function to add a task.
// Creates a new <li> element for the task.
// Populates the <li> with:
// A <span> showing the task text.
// A <div> with two buttons:
// Complete button (✔): To mark the task as done.
// Delete button (✖): To remove the task.
// Appends the newly created <li> to the taskList <ul>.


// 4.Mark a task as complete:
// Adds an event listener to the "Complete" button.
// When clicked, toggles the completed class on the task’s <li> element.
// The completed class is styled in CSS to strike through the task and change its appearance.
// querySelector is a method in JavaScript that allows you to select the first HTML element that matches a specific CSS selector.




// 5.Deleting a task:
// Adds an event listener to the "Delete" button.
// When clicked, removes the task’s <li> element from the taskList.

// 6.Clearing all completed task:
// Adds an event listener to the "Clear Completed" button.
// When clicked:
// Finds all <li> elements with the completed class using document.querySelectorAll.
// Iterates over these elements and removes them from the taskList.
