import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  let todoElem = document.getElementById('todos');
  let template = '';

  todos.forEach(t => {
    template += t.Template;
  })
  todoElem.innerHTML = template;

  todos.forEach(t=>{
    let taskStatus = document.getElementById(t._id)
    if(t.completed == true) {
      taskStatus.disabled = true;
      taskStatus.checked = true;
     }else{ 
        taskStatus.disabled = false;
        taskStatus.checked = false;
     }
  });
  let todosLeft = todos.filter(t=>t.completed == false);
  document.getElementById('todo-count').innerHTML = todosLeft.length;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe('todos', _drawTodos);
    store.subscribe('user', TodoService.getTodos)
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.taskTodo.value
    };
    TodoService.addTodoAsync(todo);
    form.taskTodo.value = ''
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}