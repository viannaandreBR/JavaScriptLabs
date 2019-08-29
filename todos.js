var listElement = document.querySelector('#app  ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
        'Fazer Cafe',
        'Estudar Java Script',
        'Comitar no Git Hub',
        'Aprender Docker'
];
  
function renderTodos(){
  listElement.innerHTML='';
  for (todo of todos) {

    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    
    listElement.appendChild(todoElement);
    console.log(todo);
  }
  }

  function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
  }


buttonElement.onclick = addTodo;

renderTodos();

