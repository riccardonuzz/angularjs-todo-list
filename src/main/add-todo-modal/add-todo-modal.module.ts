import * as angular from 'angular';
import AddTodoModalComponent from './add-todo-modal.component';

export default angular.module('addTodoModalModule', [])
                      .component('addTodoModalComponent', new AddTodoModalComponent())
                      .name;