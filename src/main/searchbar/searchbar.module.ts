import * as angular from 'angular';
import SearchbarComponent from './searchbar.component';

export default angular.module('searchbarModule', [])
                      .component('searchbarComponent', new SearchbarComponent())
                      .name;