import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import formFields from './formFields/formFields';
import buttons from './buttons/buttons';
import stories from './stories/stories';

let componentModule = angular.module('app.components', [
  Home,
  About,
  formFields,
  buttons,
  stories
])

.name;

export default componentModule;
