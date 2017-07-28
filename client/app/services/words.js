import angular from 'angular';

let wordsModule = angular.module('app.words', [])
.factory('Words', Words)
.name;

    const userWords = {
            nouns: [],
            adjectives: [],
            verbs: [],
            adverbs: []
        };

function Words(){
    const service = {
        fillNouns: (nounsList) => {
            userWords.nouns = nounsList;
        },
        fillVerbs: (verbsList) => {
            userWords.verbs = verbsList;
        },
        fillAdverbs: (adverbsList) => {
            userWords.adverbs = adverbsList;
        },
        fillAdjectives: (adjectivesList) => {
            userWords.adjectives = adjectivesList;
            console.log(adjectivesList);

        },
        getNouns: () => (userWords.nouns),
        getVerbs: () => (userWords.verbs),
        getAdverbs: () => (userWords.adverbs),
        getAdjectives: () => (userWords.adjectives)
    };
    return service;


}

export default wordsModule;