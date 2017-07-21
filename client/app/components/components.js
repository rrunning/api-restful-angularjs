import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import formFields from './formFields/formFields';
import buttons from './buttons/buttons';

let componentModule = angular.module('app.components', [
  Home,
  About,
  formFields,
  buttons
])

.name;

export default componentModule;
