import { IOnInit, Injectable, IControllerConstructor, IScope } from 'angular';
import TodoListService from '../todo-list.service';
import './searchbar.component.css';

export default class SearchbarComponent {
    controller: Injectable<IControllerConstructor> = SearchbarComponentController;
    template = require('./searchbar.component.html');

    constructor() { }
};

class SearchbarComponentController implements IOnInit {
    public static $inject: Array<string> = ['$scope', 'TodoListService'];

    constructor(private $scope: IScope, private todoListService: TodoListService) {
    }

    $onInit() {
    };
}