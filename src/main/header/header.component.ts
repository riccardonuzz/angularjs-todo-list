import { IOnInit, Injectable, IControllerConstructor } from 'angular';

export default class HeaderComponent {
    controller: Injectable<IControllerConstructor> = HeaderComponentController;
    template = require('./header.component.html');

    constructor() { }
};

class HeaderComponentController implements IOnInit {
    public static $inject: Array<string> = [];
    public headerTitle: string;


    constructor() {
    }

    $onInit() {
        this.headerTitle = "To-do list app";
    };
}