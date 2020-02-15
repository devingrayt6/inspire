


export default class Task {
    constructor(data){
        this.id = data._id;
        this.completed = data.completed;
        this.user = data.user;
        this.description = data.description;
    }


    get Template(){
        return `
            <p>${this.description}</p>
        `;
    }
}