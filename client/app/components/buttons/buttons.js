import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buttonsComponent from './buttons.component';

let buttonsModule = angular.module('buttons', [
  uiRouter
])

.component('buttons', buttonsComponent)

.name;

export default buttonsModule;
