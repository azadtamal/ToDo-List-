//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Function
function addTodo(event) {
  //prevent form from Submitting
  event.preventDefault();
  //todo div

  //Input Value
  const input = document.getElementById('input').value; //Vul

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = input;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //check mark Btn
  const completeButton = document.createElement('button');
  completeButton.innerHTML = `<i class="fas fa-check"></i>`; //Vul
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  //check Trash Btn
  const trashButton = document.createElement('button');
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`; //Vul
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton);
  //append list
  todoList.appendChild(todoDiv);

  document.getElementById('input').value = ''; //Vul
}
