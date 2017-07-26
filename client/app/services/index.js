import angular from 'angular';
import Words from './words';
import StoryGenerator from './storyGenerator';

console.log('Words', Words);

let commonModule = angular.module('app.services', [
    Words,
    StoryGenerator
])
.name;

export default commonModule;
