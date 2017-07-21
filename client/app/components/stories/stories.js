import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storiesComponent from './stories.component';

let storiesModule = angular.module('stories', [
  uiRouter
])

.component('stories', storiesComponent)

.name;

export default storiesModule;
