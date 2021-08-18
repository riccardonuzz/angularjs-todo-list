import * as angular from 'angular';
import HeaderComponent from './header.component';

export default angular.module('headerModule', [])
                      .component('headerComponent', new HeaderComponent())
                      .name;