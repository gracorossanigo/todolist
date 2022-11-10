import {Todo} from './toDoList.js'
class project {
    constructor(name) {
        this.name = name;
    }
    todos = [];
    addNewTodo(todoName){
        this.todos.append(new Todo(todoName))
    }
}