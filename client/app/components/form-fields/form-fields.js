import angular from 'angular';
import uiRouter from 'angular-ui-router';
import form-fieldsComponent from './form-fields.component';

let form-fieldsModule = angular.module('form-fields', [
  uiRouter
])

.component('form-fields', form-fieldsComponent)

.name;

export default form-fieldsModule;
