import angular from 'angular';

let wordsModule = angular.module('app.words', [])
.factory('Words', Words)
.name;

function Words(){
    const service = {
        fillWords: (userWords) => {

        }
    };
    return service;


}

export default wordsModule;