import { IOnInit, Injectable, IControllerConstructor, IScope } from 'angular';
import './todo.component.css';
import { Todo } from '../../models/todo';

export default class TodoComponent {
    bindings = {
        todo: '<'
    };
    controller: Injectable<IControllerConstructor> = TodoComponentController;
    template = require('./todo.component.html');

    constructor() { }
};

class TodoComponentController implements IOnInit {
    public static $inject: Array<string> = ['$scope'];
    public todo: Todo;
    public isInEditMode: boolean = false;

    constructor(private $scope: IScope) { }

    async $onInit() { };

    setCompleted() {
        this.todo.completed = !this.todo.completed;
        this.updateTodo();
    }

    deleteTodo() {
        this.$scope.$emit('deleteTodo', this.todo.id);
    }

    setInEditMode() {
        this.isInEditMode = !this.isInEditMode;
    }

    updateTodo() {
        this.$scope.$emit('updateTodo', this.todo);
        this.isInEditMode = false;
    }
}