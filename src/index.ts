import * as angular from 'angular';

import MainModule from './main/main.module';

interface IAppScope extends angular.IScope {
    title: string
}

class AppController {
    public static $inject: Array<string> = [];
    // public static $inject: Array<string> = ['$scope'];
    // title: string = 'Hello Angular';

    constructor(private $scope: IAppScope) {
        // $scope.title = this.title;
    }
}

angular
    .module('todoApp', [MainModule])
    .controller('appController', AppController);

