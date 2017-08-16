import angular from 'angular';
import Item from './item';

let commonModule = angular.module('app.services', [
    Item,
])
.name;

export default commonModule;
