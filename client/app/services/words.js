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
            // console.log(adjectivesList);
        },
        userWords: userWords,
        
        getNouns: () => (userWords.nouns),
        getVerbs: () => (userWords.verbs),
        getAdverbs: () => (userWords.adverbs),
        getAdjectives: () => (userWords.adjectives)
    };
    return service;
    // why do I need to return the service instead of returning an object that i declare within the service?
}

export default wordsModule;