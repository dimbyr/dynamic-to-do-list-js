document.addEventListener("DOMContentLoaded", function(){
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  savedTasks = JSON.parse(localStorage.getItem('tasks'));
  // console.log(`Ito ary: ${JSON.parse(savedTasks)}`);
  // console.log(localStorage.tasks);
  if (savedTasks){
    taskList.innerHTML = savedTasks;
  }

  function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("enter a task");
    } else {
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
      }
      )

      localStorage.setItem("tasks", JSON.stringify(taskList.innerHTML));
    }
  }
  
  const deleteButton = document.querySelectorAll(".remove-btn");
  deleteButton.forEach((elt) => {
    elt.addEventListener("click", function(event){
    event.target.parentElement.remove();
  })});


  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      addTask();
    }
  });

  

}
)