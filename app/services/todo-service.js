import store from "../store.js";
import Task from '../models/task.js';

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/devin/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
      .then(res=>{
        let todos = res.data.data.map(t=>new Task(t));
        store.commit('todos', todos);
      })
      .catch(error=>console.error(error))
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res =>{
        let newTodo = new Task(res.data.data);
        let newTodos = [...store.State.todos, newTodo]
        store.commit('todos', newTodos)
      })
      .catch(error=>console.error(error))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    todo.completed = !todo.completed;

    todoApi.put(todoId, todo)
    .then(res=>{
      store.commit('todos', store.State.todos)
      console.log(store.State.todos)
    })
    .catch(error=>console.error(error))
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {    
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back what do you need to insure happens?
    todoApi.delete(todoId)
      .then(res=>{
        let newTodos = store.State.todos.filter(t => t._id != todoId)
        store.commit('todos', newTodos)
      })
      .catch(error=>console.error(error))
  }
}

const todoService = new TodoService();
export default todoService;
