document.addEventListener("DOMContentLoaded", function(){

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const tasklist = document.getElementById('task-list');

  function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("enter a task");
    } else {
      const task = document.createElement("li");
      task.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.className = 'remove-btn';
      removeButton.textContent = "Remove";
      
      task.appendChild(removeButton);
      tasklist.appendChild(task);
      taskInput.value = "";

      removeButton.addEventListener('click', function(){
        task.remove();
      }
      )
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      addTask();
    }
  })

}
)