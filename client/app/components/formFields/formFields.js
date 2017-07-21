import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formFieldsComponent from './formFields.component';

let formFieldsModule = angular.module('formFields', [
  uiRouter
])

.component('formFields', formFieldsComponent)

.name;

export default formFieldsModule;
