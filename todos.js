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
  for (todo of todos) {
      console.log(todo);
  }


}

renderTodos();


