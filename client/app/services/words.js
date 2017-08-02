import angular from 'angular';

let wordsModule = angular.module('app.words', [])
.factory('Words', Words)
.name;


function Words(){
    const userWords = {
            nouns: [],
            adjectives: [],
            verbs: [],
            adverbs: []
        };
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
            // console.log(adjectivesList);
        },
        getNouns: () => (userWords.nouns),
        getVerbs: () => (userWords.verbs),
        getAdverbs: () => (userWords.adverbs),
        getAdjectives: () => (userWords.adjectives)
    };
    console.log('userWords', userWords);
    return service;
    // why do I need to return the service instead of returning an object that i declare within the service?
}

export default wordsModule;