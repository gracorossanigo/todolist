import {Task} from './task';
export {Todo};
class Todo {
    constructor(name) {
        this.name = name;
    }
    tasks = [];
    addNewTask(taskName, taskDescription){
        this.tasks.append(new Task(taskName, taskDescription));
    }
}