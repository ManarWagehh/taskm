
var input = document.querySelectorAll('.task_input');
var tasks_section = document.querySelectorAll('.tasks');
var backup_tasks_section = document.querySelectorAll('.backup_tasks');
var button = document.querySelectorAll('.btn');
var live_view = document.querySelectorAll('.live_view');
var e=document.querySelectorAll('.clear');
const todosListEl = document.getElementById('todos-list');

function inner_task(value,parent_section){
    var element = document.createElement('p');
    var elemt_value = document.createTextNode(value);
    element.append(elemt_value);
    parent_section.append(element);
}

button[0].addEventListener('click',function(){
    
    inner_task(input[0].value,tasks_section[0]);

})


input[0].addEventListener('keyup',function(){
    input.focus();
    live_view[0].innerHTML=input[0].value;
})
function renderTodos() {
    if (todos.length === 0) {
      todosListEl.innerHTML = '<center>Nothing to do!</center>';
      return;
    }
  
    // CLEAR ELEMENT BEFORE A RE-RENDER
    todosListEl.innerHTML = '';
  
    // RENDER TODOS
    todos.forEach((todo, index) => {
      todosListEl.innerHTML += `
      <div class="todo" id=${index}>
        <i 
          class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}"
          style="color : ${todo.color}"
          data-action="check"
        ></i>
        <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
        <i class="bi bi-pencil-square" data-action="edit"></i>
        <i class="bi bi-trash" data-action="delete"></i>
      </div>
      `;
    });
  }
  
  // CLICK EVENT LISTENER FOR ALL THE TODOS
  todosListEl.addEventListener('click', (event) => {
    const target = event.target;
    const parentElement = target.parentNode;
  
    if (parentElement.className !== 'todo') return;
  
    // t o d o id
    const todo = parentElement;
    const todoId = Number(todo.id);
  
    // target action
    const action = target.dataset.action;
  
    action === 'check' && checkTodo(todoId);
    action === 'edit' && editTodo(todoId);
    action === 'delete' && deleteTodo(todoId);
  });
