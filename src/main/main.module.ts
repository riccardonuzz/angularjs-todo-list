import * as angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderModule from './header/header.module';
import TodoListModule from './todo-list/todo-list.module';
import MainComponent from './main.component';
import TodoListService from './todo-list.service';
import AddTodoModalModule from './add-todo-modal/add-todo-modal.module';
import SearchbarModule from './searchbar/searchbar.module';

export default angular.module('mainModule', [
    HeaderModule,
    TodoListModule,
    AddTodoModalModule,
    SearchbarModule
])
.service('TodoListService', TodoListService)
.component('mainComponent', new MainComponent())
.name;
