import { IOnInit, Injectable, IControllerConstructor, IScope } from 'angular';
import TodoListService from '../todo-list.service';
import './add-todo-modal.component.css';

export default class AddTodoModalComponent {
    controller: Injectable<IControllerConstructor> = AddTodoModalComponentController;
    template = require('./add-todo-modal.component.html');

    constructor() { }
};

class AddTodoModalComponentController implements IOnInit {
    public static $inject: Array<string> = ['$scope', 'TodoListService'];
    todo = {
        title: '',
        completed: false
    };

    constructor(private $scope: IScope, private todoListService: TodoListService) {
    }

    $onInit() {
    };

    addToDo() {
        this.todoListService.addTodo(this.todo);
        this.$scope.$emit('todosUpdated');
        this.$scope.$emit('showAddToDoModal');
    }
}