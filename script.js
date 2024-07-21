document.addEventListener("DOMContentLoaded", function(){
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const deleteButton = document.querySelectorAll(".remove-btn");
  loadTasks();

  deleteButton.forEach((elt) => {
    elt.addEventListener("click", function(event){
    let savedList = JSON.parse(localStorage.getItem('tasks')|| []);
    index = savedList.indexOf(event.target.textContent);
    console.log(savedList);
    savedList = savedList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(savedList));
    event.target.parentElement.remove();
  })});

  addButton.addEventListener("click", 
    () => {
      const taskText = taskInput.value.trim();// retrieve text in input
      if (taskText === "") {
        alert("enter a task");
      } else {
        addTask(taskText);
    }
  }
  )

  taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("enter a task");
      } else {
        addTask(taskText);
    }
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    if (taskText !== "") {
      const task = document.createElement("li");
      task.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.classList.add('remove-btn');
      removeButton.textContent = "Remove";
      
      task.appendChild(removeButton);
      taskList.appendChild(task);
      taskInput.value = "";

      removeButton.addEventListener('click', function(){
        task.remove();
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
      )

      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
}

}
)