import { IOnInit, Injectable, IControllerConstructor, IScope } from 'angular';

export default class MainComponent {
    controller: Injectable<IControllerConstructor> = MainComponentController;
    template = require('./main.component.html');

    constructor() { }
};

class MainComponentController implements IOnInit {
    public static $inject: Array<string> = ['$scope'];
    public showAddToDoModal: boolean = false;

    constructor(private $scope: IScope) {
    }

    $onInit() {
        this.$scope.$on('showAddToDoModal', () => {
            this.showAddToDoModal = !this.showAddToDoModal;
        });
    };
}