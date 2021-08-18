import * as angular from 'angular';
import TodoListComponent from './todo-list.component';
import TodoComponent from './todo/todo.component';

export default angular.module('todoListModule', [])
                      .component('todoListComponent', new TodoListComponent())
                      .component('todoComponent', new TodoComponent())
                      .name;