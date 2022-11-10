import {Task} from './task';
export {Todo};
class Todo {
    constructor(name) {
        this.name = name;
    }
    tasks = [];
    addNewTask(task){
        tasks.append(new Task(task));
    }
}