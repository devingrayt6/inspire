import store from '../store.js';

class UserService {
    constructor(){

    }

    toggleUserInput(){
        let inputStatus = !store.State.userInput;
        store.commit('userInput', inputStatus)
    }
}


const userService = new UserService();
export default userService;