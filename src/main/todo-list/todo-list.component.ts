import { IOnInit, Injectable, IControllerConstructor, IScope, ITimeoutService, IAngularEvent } from 'angular';
import './todo-list.component.css';
import TodoListService from '../todo-list.service';
import { Todo } from '../models/todo';

export default class TodoListComponent {
    controller: Injectable<IControllerConstructor> = TodoListComponentController;
    template = require('./todo-list.component.html');

    constructor() { }
};

class TodoListComponentController implements IOnInit {
    public static $inject: Array<string> = ['$scope', 'TodoListService'];

    todos: Todo[] = [];

    constructor(private $scope: IScope, private todoListService: TodoListService) { }

    $onInit() {
        this.$scope.$on('updateTodo', (event: IAngularEvent, todo: Todo) => {
            this.todoListService.updateTodo(todo);
            this.getTodos();
        });

        this.$scope.$on('deleteTodo', (event: IAngularEvent, todoId: number) => {
            console.log('a')
            this.todoListService.deleteTodo(todoId);
            this.getTodos();
        });

        this.$scope.$on('todosUpdated', (event: IAngularEvent, todoId: number) => {
            this.getTodos();
        });

        this.getTodos();
    }

    getTodos() {
        this.todos = this.todoListService.getTodos();
    }
}