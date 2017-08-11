import angular from 'angular';
import Words from './words';
import StoryGenerator from './storyGenerator';

let commonModule = angular.module('app.services', [
    Words,
    StoryGenerator
])
.name;

export default commonModule;
