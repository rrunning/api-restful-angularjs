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

const defaultNouns = ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'];
const defaultVerbs = ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'];
const defaultAdjectives = ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'];
const defaultAdverbs = ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely'];


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
        },
        userWords: userWords,
        
        getNouns: () => (userWords.nouns),
        getVerbs: () => (userWords.verbs),
        getAdverbs: () => (userWords.adverbs),
        getAdjectives: () => (userWords.adjectives),
        // randomizeArr: (arr) => {
        //     for (const i = arr.length - 1; i >= 0; i--) {
        //         const randomIndex = Math.floor(Math.random() * (i + 1));
        //         const itemAtIndex = arr[randomIndex];
        //         arr[randomIndex] = arr[i];
        //         arr[i] = itemAtIndex;
        //     }
        // }
    };
    return service;
}



export default wordsModule;