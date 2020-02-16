
export default class Task {
    constructor(data){
        this._id = data._id;
        this.completed = data.completed;
        this.user = data.user;
        this.description = data.description;
    }


    get Template(){

        return `
        <div class="form-check one-task">
          <div class="check-task">
            <input class="form-check-input" type="checkbox" value="" id="${this._id}" onclick="app.todoController.toggleTodoStatus('${this._id}')">
            <label class="form-check-label" for="${this._id}">
              ${this.description}
            </label>
          </div>
          <button class="btn btn-dark text-danger remove-task" onclick="app.todoController.removeTodo('${this._id}')">x</button>
        </div>
      
      `;
    }
}