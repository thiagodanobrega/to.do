//função que adiciona tarefa
function addTask(){
  const taskTitle = document.querySelector('#taskTitle').value;
  if (taskTitle){
    // clona template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);
    // adiciona titulo
    newTask.querySelector(".taskTitle").textContent = taskTitle;
    // remove as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    // adiciona tarefa na lista
    const list = document.querySelector("#taskList");
    list.appendChild(newTask);
    // adicionar evento de remover
    const removeTask = newTask.querySelector('.removeTask').addEventListener('click',function() {
      deleteTask(this);
    })
    // adicionar evento de completar tarefa
    const checkTask = newTask.querySelector('.checkTask').addEventListener('click', function(){
      completeTask(this);
    })
    // limpar texto
    document.querySelector('#taskTitle').value = "";

  }
}
// função de remover tarefa
function deleteTask(task) {
  task.parentNode.remove(true);
}
// função de completar tarefa
function completeTask(task) {
  const taskComplete = task.parentNode;
  taskComplete.classList.toggle('done');
}
//evento de adicionar tarefa
const addBtn = document.querySelector('#Btn');
addBtn.addEventListener('click', function(e){
  e.preventDefault();
  addTask();
})