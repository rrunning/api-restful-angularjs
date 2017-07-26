import angular from 'angular';

let storyGeneratorModule = angular.module('app.storyGenerator', [])
.factory('StoryGenerator', StoryGenerator)
.name;

function StoryGenerator(){
    const service = {
        generateStory: (storyName, userWords) => {
            let finalWords = Words.fillWords(userWords);
            return 
        }
    };
    return service;


}

export default storyGeneratorModule;