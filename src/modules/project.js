import {Todo} from './toDoList.js'
class Project {
    constructor(name) {
        this.name = name;
    }
    todos = [];
    addNewTodo(todoName){
        this.todos.append(new Todo(todoName))
    }
}