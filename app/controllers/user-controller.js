import UserService from '../services/user-service.js';
import store from '../store.js';


function _drawForm(){
    let status = store.State.userInput;
    if(status){
        document.getElementById('user-input').innerHTML = `
            <form onsubmit="app.userController.changeUser(event)">
                <input type="text" name="newUser" placeholder="what is your username..." />
                <button class="btn btn-success" type="submit">change user</button>
            </form>
        `
    }
}

export default class UserController{
    constructor(){
        store.subscribe('userInput', _drawForm)
    }

    toggleUserInput(){
        UserService.toggleUserInput();
    }

    changeUser(event){
        event.preventDefault();
        let newUser = event.target.newUser.value;
        store.commit('user', newUser);
    }
}